<template>
    <p class="agreement-text">Настоящим согласием подтверждаю, что проинформирован о том, 
        что под обработкой персональных данных понимаются действия, определённые 
        в Федеральном законе № 152-ФЗ от 27.07.2006 <a href="">«О персональных данных»</a>, а именно: сбор, запись, 
        систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, 
        передача (предоставление, доступ), блокирование, удаление персональных данных, совершаемые 
        с использованием средств автоматической, а также неавтоматической обработки данных.
    </p>
    <label class="agreement-label">
        <input 
            type="checkbox" 
            v-model="formModel.persDataAccessment"
        >
        Я согласен на обработку персональных данных
    </label>
    <ui-btn 
        width="100%" 
        padding="1em"
        type="submit"
        :disabled="!formModel.persDataAccessment"
    >Зарегистрироваться</ui-btn>
</template>

<script>
import UiBtn from '@/components/ui/UiBtn.vue'
import { computed } from 'vue'
export default {
    props: {
        modelValue: {
            type: Object,
            default: () => ({}),
        }
    },
    components: { UiBtn },
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

<style lang="scss" scoped>
    .agreement-text,
    .agreement-label {
        display: block;
        margin-bottom: 2.75rem;
    }
</style>