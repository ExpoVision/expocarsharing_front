<template>
    <ProfileSettingsForm title="Настройки" @onSubmit="onGeneralInfoChangeSubmit">
        {{generalInfo}}
        <div class="profile__settings-row">
            <UiInput 
                type="text"
                label="Имя Фамилия"
                v-model="generalInfo.name"
            />
            <UiInput 
                type="date"
                label="Дата рождения"
                v-model="generalInfo.birthday"
            />
        </div>
        <div class="profile__settings-row">
            <UiInput 
                type="text"
                label="Телефон"
                v-model="generalInfo.phoneNumber"
            />
            <UiInput 
                type="email"
                label="E-mail"
                v-model="generalInfo.email"
            />
        </div>
        <div class="profile__settings-row profile__settings-row--stretch">
            <UiFileAttachment 
                label="Фото"
                :isPhotoAttachment="true"
                placeholderTip="Загрузить"
                @handleFileChange="onPhotoChange"
            />
            <div class="profile__settings-column">
                <UiFileAttachment
                    label="Паспорт"
                    placeholderTip="Прикрепить"
                    @handleFileChange="onPassportChange"
                />
                <UiFileAttachment
                    label="Водительское удостоворение" 
                    placeholderTip="Прикрепить"
                    @handleFileChange="onDriversLicenseChange"
                />
            </div>
        </div>
    </ProfileSettingsForm>
  </template>
  
<script>
import UiInput from '@/components/ui/UiInput.vue'
import UiFileAttachment from '@/components/ui/UiFileAttachment.vue'
import ProfileSettingsForm from '@/modules/Landing/components/ProfileSettingsForm.vue'
import { useStore } from 'vuex'
import { ref, computed, onMounted } from 'vue'

export default {
    name: 'ProfileView',
    components: { UiInput, UiFileAttachment, ProfileSettingsForm },
    setup() {
        const store = useStore()
        const userData = computed(() => store.getters['user/userProfileData'])

        onMounted(() => store.dispatch('user/fetchUserProfileData'))

        // general
        const generalInfo = ref({
            name: userData.value?.name ?? '',
            birthday: userData.value?.birthday ?? null,
            phoneNumber: userData.value?.phoneNumber ?? '',
        })

        const formData = new FormData()

        const onPhotoChange = file => {
            formData.append('photo', file)
        }
        const onPassportChange = file => {
            formData.append('passport', file)
        }
        const onDriversLicenseChange = file => {
            formData.append('driversLicense', file)
        }

        const onGeneralInfoChangeSubmit = () => {
            Object.keys(generalInfo.value).forEach(key => {
                formData.append(key, generalInfo.value[key])
            })
            store.dispatch('user/updateProfile', formData)
        }

        return {
            generalInfo,
            onPhotoChange,
            onPassportChange,
            onDriversLicenseChange,

            onGeneralInfoChangeSubmit
        }
    }
}
</script>

<style lang="scss" scoped></style>