<template>
    <ProfileSettingsForm title="Настройки" @onSubmit="onGeneralInfoChangeSubmit">
        <div class="profile__settings-row">
            <UiInput 
                type="text"
                label="Имя Фамилия"
                v-model="userInfo.name"
            />
            <UiInput 
                type="date"
                label="Дата рождения"
                v-model="profileInfo.birthday"
            />
        </div>
        <div class="profile__settings-row">
            <UiInput 
                type="text"
                label="Телефон"
                v-model="profileInfo.phone"
            />
            <UiInput 
                type="email"
                label="E-mail"
                v-model="userInfo.email"
            />
        </div>
        <div class="profile__settings-row profile__settings-row--stretch">
            <UiFileAttachment 
                label="Фото"
                name="photo"
                :isPhotoAttachment="true"
                :placeholderTip="profileInfo?.photo?.name ?? 'Загрузить'"
                @handleFileChange="onPhotoChange"
            />
            <div class="profile__settings-column">
                <UiFileAttachment
                    label="Паспорт"
                    name="passport"
                    :placeholderTip="profileInfo?.passport?.name ?? 'Прикрепить'"
                    @handleFileChange="onPassportChange"
                />
                <UiFileAttachment
                    label="Водительское удостоворение" 
                    name="license"
                    :placeholderTip="profileInfo?.license?.name ?? 'Прикрепить'"
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

import { BASE_URL } from '@/config/index'

export default {
    name: 'ProfileView',
    components: { UiInput, UiFileAttachment, ProfileSettingsForm },
    setup() {
        const store = useStore()
        const user = computed(() => store.getters['user/getUser'])
        const userProfileInfo = computed(() => store.getters['user/getUserProfileInfo'])

        const profileInfo = ref({
            birthday: null,
            phone: null,
            passport: null,
            license: null,
            photo: null,
        })

        const media = ref({
            passport: null,
            license: null,
            photo: null,
        })

        const userInfo = ref({
            name: '',
            email: ''
        })

        onMounted( async () => {
            await store.dispatch('user/fetchUserProfileInfo', {userId: user.value.id})

            profileInfo.value = Object.assign(userProfileInfo.value)
            userInfo.value = Object.assign(user.value)
            Object.keys(media.value).forEach(key => {
                const field = profileInfo.value[key]
                if(field) {
                    const url = BASE_URL + 'users/' + profileInfo.value[key]

                    const extension = field.slice(field.indexOf('.'))
                    const fileName = key + user.value.id + extension

                    fetch(url)
                    .then(response => response.blob()) 
                    .then(blob => {
                        profileInfo.value[key] = new File([blob], fileName, {type: blob.type})
                        
                    })
                }
            }) 
        })

        const formData = new FormData()

        const onPhotoChange = file => {
            profileInfo.value.photo = file
            formData.append('photo', file)
        }
        const onPassportChange = file => {
            profileInfo.value.passport = file
            formData.append('passport', file)
        }
        const onDriversLicenseChange = file => {
            profileInfo.value.license = file
            formData.append('license', file)
        }

        const onGeneralInfoChangeSubmit = () => {
            Object.keys(profileInfo.value).forEach(key => {
                formData.append(key, profileInfo.value[key])
            })

            store.dispatch('user/updateUser', userInfo.value)
            store.dispatch('user/updateProfile', formData)
        }

        return {
            userInfo,
            profileInfo,
            onPhotoChange,
            onPassportChange,
            onDriversLicenseChange,

            onGeneralInfoChangeSubmit
        }
    }
}
</script>

<style lang="scss" scoped></style>