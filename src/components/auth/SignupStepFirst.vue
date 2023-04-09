<template>
    <UiInput
        type="text"
        label="Введите ваши Имя и Фамилию"
        placeholder="Имя и Фамилия" 
        v-model="formModel.name"
    />
    <UiInput
        type="date"
        label="Введите вашу Дату рождения"
        v-model="formModel.birthday" 
    />
    <UiInput
        type="phone"
        label="Введите ваш Телефон"
        placeholder="+7 ___ ___ - __ - __" 
        v-model="formModel.phoneNumber" 
    />
    <UiFileAttachment
        label="Паспорт"
        placeholderTip="Прикрепить"
        @handleFileChange="(...args) => onFileChange('passport', ...args)"
    />
    <UiFileAttachment
        label="Водительское удостоворение"
        placeholderTip="Прикрепить"
        @handleFileChange="(...args) => onFileChange('license', ...args)"
    />
    <UiFileAttachment
        label="Загрузите ваше Фото"
        :isPhotoAttachment="true"
        placeholderTip="Загрузить"
        @handleFileChange="(...args) => onFileChange('photo', ...args)"
    />
</template>

<script>

import UiInput from '@/components/ui/UiInput.vue'
import UiFileAttachment from '@/components/ui/UiFileAttachment.vue'
import { computed } from 'vue'


export default {
    components: { 
        UiInput, 
        UiFileAttachment
    },
    props: {
        modelValue: {
            type: Object,
            default: () => ({}),
        }
    },
    emits: ['updateFile'],
    setup(props, { emit }) {
        const formModel = computed({ 
            get: () => props.modelValue,
            set: (value) => emit('update:modelValue', value),
        })

        const onFileChange = (key, file) => {
            emit('updateFile', key, file)
        }

        return {
            formModel,
            onFileChange
        }
    }
}
</script>

<style>

</style>