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
        v-model="formModel.phone" 
    />
    <UiFileAttachment
        label="Паспорт"
        :placeholderTip="formModel.passport ?? 'Прикрепить'"
        @handleFileChange="(...args) => onFileChange('passport', ...args)"
    />
    <UiFileAttachment
        label="Водительское удостоворение"
        :placeholderTip="formModel.license ?? 'Прикрепить'"
        @handleFileChange="(...args) => onFileChange('license', ...args)"
    />
    <UiFileAttachment
        label="Загрузите ваше Фото"
        :isPhotoAttachment="true"
        :placeholderTip="formModel.photo ?? 'Загрузить'"
        @handleFileChange="(...args) => onFileChange('photo', ...args)"
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
import UiFileAttachment from '@/components/ui/UiFileAttachment.vue'
import { computed } from 'vue'


export default {
    components: { 
        UiInput,
        UiBtn,
        UiFileAttachment
    },
    props: {
        modelValue: {
            type: Object,
            default: () => ({}),
        }
    },
    emits: ['updateFile', 'nextStep'],
    setup(props, { emit }) {
        const formModel = computed({ 
            get: () => props.modelValue,
            set: (value) => emit('update:modelValue', value),
        })

        const onFileChange = (key, file) => {
            emit('updateFile', key, file)
        }

        const isNextStepAllow = computed(() => {
            return      formModel?.value?.name
                    &&  formModel?.value?.birthday
                    &&  formModel?.value?.phone
                    &&  formModel?.value?.license
                    &&  formModel?.value?.photo
        })

        return {
            formModel,
            onFileChange,
            isNextStepAllow
        }
    }
}
</script>

<style>

</style>