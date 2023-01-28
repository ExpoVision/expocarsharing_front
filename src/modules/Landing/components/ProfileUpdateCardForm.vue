<template>
    <ProfileSettingsForm 
        title="Оплата" 
        btnTitle="Сохранить карту"
        @onSubmit="onCardChangeSubmit"
    >
        <div class="profile__settings-row">
            <UiInput 
                type="text"
                label="Номер карты"
                v-model="cardInfo.cardNumber"
            />
            <div class="profile__settings-row profile__settings-expiration-row">
                <div class="expiration">
                    <label>
                        <span>Срок действия</span>
                        <div class="expiration-inputs">
                            <input
                                type="text"
                                placeholder="__"
                                width="68px"
                                v-model="cardInfo.expireDateMonth"
                            />
                            <span>/</span>
                            <input
                                type="text"
                                placeholder="__"
                                width="68px"
                                v-model="cardInfo.expireDateYear"
                            />
                        </div>
                    </label>
                </div>
                <UiInput
                    type="text"
                    label="CVC / CVV"
                    placeholder="___"
                    v-model="cardInfo.cardCode"
                />
            </div>
        </div>
        <div class="profile__settings-row">
            <UiInput type="text" label="Имя и Фамилия владельца карты" placeholder="Имя" />
            <UiInput type="text" label="" placeholder="Фамилия" />
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

        // card
        // BackFlag - проверить соответствие полям на бэке
        const cardInfo = ref({
            cardNumber: '',
            expireDateMonth: '',
            expireDateYear: '',
            cardCode: '',
            ownerFirstname: '',
            ownerSurname: ''
        })

        const onCardChangeSubmit = () => {
            // BackFlag - проверить соответствие полям на бэке
            // если expireDate нужен в разделенном виде - можно в payload передать cardInfo.value
            store.dispatch('user/updateCard', {
                cardNumber: cardInfo.value.cardNumber,
                expireDate: `${cardInfo.value.expireDateMonth}/${cardInfo.value.expireDateMonth}`,
                cardCode: cardInfo.value.cardCode,
                ownerFirstname: cardInfo.value.ownerFirstname,
                ownerSurname: cardInfo.value.ownerSurname
            })
        }

        return {
            cardInfo,
            onCardChangeSubmit
        }
    }
}
</script>


<style lang="scss" scoped>
     .profile{

        &__settings-row{
            @include flex-sb-c;
            
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

        .expiration{

            &-inputs{
                @include flex-sb-c;
                gap: 11px;

                @media screen and (max-width: 1055px) {
                    gap: 4px;
                }
            }

            label{
                display: block;
                margin-bottom: 1.813em;

                & > span{
                    display: block;
                    margin-bottom: 1.1em;
                    font-size: 1rem;
                    color: $purple-dark;
                }

                span{
                    color: $purple-dark;
                }
            }

            input{
                display: block;
                width: 68px;
                background-color: transparent;
                color: $purple;
                border: 1px solid $purple-dark;
                padding: 1.5em;

                @media screen and (max-width: 865px) {
                    width: 45%;
                }
            }

            & + label{
                width: 132px;
                
                @media screen and (max-width: 1055px) {
                    width: 68px;

                    input.ui-input{
                        padding: 1.5em 1.2em;
                    }
                }

                @media screen and (max-width: 865px) {
                    width: 100%;
                }
            }
        }
    }
</style>