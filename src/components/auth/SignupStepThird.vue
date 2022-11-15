<template>
    <p class="agreement-text">Настоящим согласием подтверждаю, что проинформирован о том, 
        что под обработкой персональных данных понимаются действия, определённые 
        в Федеральном законе № 152-ФЗ от 27.07.2006 <a href="">«О персональных данных»</a>, а именно: сбор, запись, 
        систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, 
        передача (предоставление, доступ), блокирование, удаление персональных данных, совершаемые 
        с использованием средств автоматической, а также неавтоматической обработки данных.
    </p>
    <label class="agreement-label">
        <input type="checkbox">
        Я согласен на обработку персональных данных
    </label>
    <ui-btn 
        width="100%" 
        padding="1em"
        :disabled="isAgree"
    >Согласен</ui-btn>
</template>

<script>
import UiBtn from '@/components/ui/UiBtn.vue';

export default {
    components: { UiBtn },
    data() {
        return {
            isAgree: false
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