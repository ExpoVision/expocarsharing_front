<template>
    <UiInput type="text" label="Введите ваши Имя и Фамилию" placeholder="Имя и Фамилия" />
    <UiInput type="date" label="Введите вашу Дату рождения" />
    <UiInput type="phone" label="Введите ваш Телефон" placeholder="+7 ___ ___ - __ - __" />
    <UiFileAttachment label="Паспорт" placeholderTip="Прикрепить"/>
    <UiFileAttachment label="Водительское удостоворение"  placeholderTip="Прикрепить"/>
    <UiFileAttachment label="Загрузите ваше Фото" :isPhotoAttachment="true" placeholderTip="Загрузить"/>
</template>

<script>

import UiInput from '@/components/ui/UiInput.vue'
import UiFileAttachment from '@/components/ui/UiFileAttachment.vue'

export default {
    components: { 
        UiInput, 
        UiFileAttachment
    }
}
</script>

<style>

</style>