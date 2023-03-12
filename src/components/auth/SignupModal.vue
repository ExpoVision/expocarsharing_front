<template>
    <Teleport to="body">
        <ModalComponent v-if="show" @close="$emit('close')" title="Регистрация">
        <template v-slot:header>
            <h3>Шаг {{step}}</h3>
        </template>
        <template v-slot:body>
            <form name="signupForm" @submit.prevent="onSignupSubmit">
                <component 
                    :is="stepString" 
                    v-model="signupForm"
                    @updateFile="onFileUpdate"
                ></component> 
                <ui-btn 
                    v-if="step != 3"
                    width="180px"
                    padding="1em"
                    type="white"
                    @click.prevent="step++"
                >Следующий шаг
                    <img src="@/assets/img/icons/arrow-right.svg" alt="">
                </ui-btn>
            </form>
        </template>
        </ModalComponent>
    </Teleport>
</template>
  
<script>
import ModalComponent from '@/components/ModalComponent.vue'
import SignupStepFirst from '@/components/auth/SignupStepFirst.vue'
import SignupStepSecond from '@/components/auth/SignupStepSecond.vue'
import SignupStepThird from '@/components/auth/SignupStepThird.vue'
import UiBtn from '@/components/ui/UiBtn.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
    emits: ['close'],
    components: { 
        ModalComponent,
        SignupStepFirst,
        SignupStepSecond,
        SignupStepThird,
        UiBtn
    },
    props: {
        show: Boolean
    },
    setup(_, { emit }) {

        const store = useStore()

        const step = ref(1)

        const stepString = computed(() => {
            const str = 'SignupStep'
            switch(step.value) {
                case 1: 
                    return str + 'First'
                case 2: 
                    return str + 'Second'
                case 3: 
                    return str + 'Third'
                default:
                    return str + 'First'
            }
        })

       
        const signupForm = ref({
            name: '',
            birthday: null,
            gender: '',
            email: '',
            password: '',
            confirmPassword: '',
            persDataAccessment: false,
        })
        const formData = new FormData()

        const onFileUpdate = (key, file) => {
            formData.append(key, file)
        }
        const onSignupSubmit = async () => {
            Object.keys(signupForm.value).forEach(key => {
                formData.append(key, signupForm.value[key])
            })
            await store.dispatch('user/signup', formData)
            emit('close')
        }

        return {
            step, 
            stepString,
            signupForm,

            onFileUpdate,
            onSignupSubmit
        }
    }
}
</script>

<style lang="scss" scoped>
</style>