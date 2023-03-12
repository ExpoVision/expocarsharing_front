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
</template>

<script>
import UiInput from '@/components/ui/UiInput.vue'
import { computed } from 'vue'

export default {
    props: {
        modelValue: {
            type: Object,
            default: () => ({}),
        }
    },
    components: { UiInput },
    setup(props, { emit }) {
        const formModel = computed({ 
            get: () => props.modelValue,
            set: (value) => emit('update:modelValue', value),
        })

        return {
            formModel
        }
    }
}
</script>

<style>

</style>