<template>
    <ProfileSettingsForm 
        title="Настройки" 
        btnTitle="Изменить пароль"
        @onSubmit="onPasswordChangeSubmit"
    >
        <div class="profile__settings-row">
            <UiInput 
                type="password"
                label="Введите пароль"
                v-model="passwordInfo.password"
            />
            <UiInput 
                type="password"
                label="Введите пароль еще раз"
                v-model="passwordInfo.confirmPassword"
            />
        </div>
    </ProfileSettingsForm>
  </template>
  
<script>
import UiInput from '@/components/ui/UiInput.vue'
import ProfileSettingsForm from '@/modules/Landing/components/ProfileSettingsForm.vue'
import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
    name: 'ProfileView',
    components: { UiInput, ProfileSettingsForm },
    setup() {
        const store = useStore()

        // password 
        const passwordInfo = ref({
            password: '',
            confirmPassword: ''
        })

        const onPasswordChangeSubmit = () => {
            if(passwordInfo.value.password 
                && passwordInfo.value.confirmPassword 
                && passwordInfo.value.password === passwordInfo.value.confirmPassword 
            )  store.dispatch('user/updatePassword', passwordInfo.value)
        }

        return {
            passwordInfo,
            onPasswordChangeSubmit
        }
    }
}
</script>

<style lang="scss" scoped></style>