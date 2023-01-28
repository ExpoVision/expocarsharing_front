<template>
    <ProfileUpdateGeneralForm />
    <ProfileUpdatePasswordForm />
    <ProfileUpdateCardForm />
  </template>
  
<script>
import ProfileUpdateCardForm from '@/modules/Landing/components/ProfileUpdateCardForm.vue'
import ProfileUpdatePasswordForm from '@/modules/Landing/components/ProfileUpdatePasswordForm.vue'
import ProfileUpdateGeneralForm from '@/modules/Landing/components/ProfileUpdateGeneralForm.vue'

export default {
    name: 'ProfileView',
    components: { ProfileUpdateCardForm, ProfileUpdatePasswordForm, ProfileUpdateGeneralForm },
}
</script>

<style lang="scss">
    .profile{
        @media screen and (max-width: 865px) {
            .ui-btn{
                width: 100%;
            }  
        }

        &__settings-row{
            @include flex-sb-c;

            &--stretch{
                align-items: stretch;
            }

            & > * {
                width: 48%;
            }

            @media screen and (max-width: 865px) {
                flex-direction: column;

                & > * {
                    width: 100%;
                }
            }
        }

        &__settings-column{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
</style>