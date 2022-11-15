<template>
    <Teleport to="body">
        <ModalComponent v-if="show" @close="$emit('close')" title="Регистрация">
        <template v-slot:header>
            <h3>Шаг {{step}}</h3>
        </template>
        <template v-slot:body>
            <form action="">
                <component :is="stepString"></component> 
                <ui-btn 
                    v-if="step != 3"
                    width="180px"
                    padding="1em"
                    type="white"
                    @click.prevent="step++"
                >
                    {{ step == 1 ? 'Следующий шаг' : 'Зарегистрироваться'}}
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
    data() {
        return {
            step: 1
        }
    },
    computed: {
        stepString() {
            const str = 'SignupStep'
            switch(this.step) {
                case 1: 
                    return str + 'First'
                case 2: 
                    return str + 'Second'
                case 3: 
                    return str + 'Third'
                default:
                    return str + 'First'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>