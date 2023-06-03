<template>
    <UiInput 
        type="email" 
        label="E-mail" 
        v-model="formModel.email"
    />
    <UiInput 
        type="password" 
        label="Введите пароль" 
        v-model="formModel.password"
    />
    <UiInput 
        type="password" 
        label="Введите пароль еще раз" 
        v-model="formModel.confirmPassword"
    />
    <ui-btn 
        width="180px"
        padding="1em"
        type="white"
        :disabled="!isNextStepAllow"
        @click.prevent="$emit('nextStep')"
    >Следующий шаг
        <img src="@/assets/img/icons/arrow-right.svg" alt="">
    </ui-btn>
</template>

<script>
import UiInput from '@/components/ui/UiInput.vue'
import UiBtn from '@/components/ui/UiBtn.vue'
import { computed } from 'vue'

export default {
    props: {
        modelValue: {
            type: Object,
            default: () => ({}),
        }
    },
     emits: ['nextStep'],
    components: { UiInput, UiBtn },
    setup(props, { emit }) {
        const formModel = computed({ 
            get: () => props.modelValue,
            set: (value) => emit('update:modelValue', value),
        })

        const isNextStepAllow = computed(() => {
            return      formModel?.value?.email
                    &&  formModel?.value?.password
                    &&  formModel?.value?.confirmPassword
                    &&  formModel?.value?.password === formModel?.value?.confirmPassword
        })

        return {
            formModel,
            isNextStepAllow
        }
    }
}
</script>

<style>

</style>