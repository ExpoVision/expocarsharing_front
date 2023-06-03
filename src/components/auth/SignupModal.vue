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
                    @toNextStep="step++"
                ></component> 
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
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
    emits: ['close'],
    components: { 
        ModalComponent,
        SignupStepFirst,
        SignupStepSecond,
        SignupStepThird
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
            phone: '',
            password: '',
            confirmPassword: '',
            persDataAccessment: false
        })

        const formData = new FormData()

        const onFileUpdate = (key, file) => {
            formData.append(`profile[${key}]`, file)
            signupForm.value[key] = file.name
        }
        const onSignupSubmit = async () => {
                const userData = {
                    name: signupForm.value.name,
                    email: signupForm.value.email,
                    password: signupForm.value.password,
                    password_confirmation: signupForm.value.confirmPassword
                }

                const profileData = {
                    birthday: signupForm.value.birthday,
                    phone: signupForm.value.phone,
                }

            Object.keys(userData).forEach(key => {
                formData.append(`user[${key}]`, userData[key])
            })

            Object.keys(profileData).forEach(key => {
                formData.append(`profile[${key}]`, profileData[key])
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