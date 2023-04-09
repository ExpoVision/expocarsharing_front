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
            <UiInput 
                v-model="cardInfo.ownerFirstname"
                type="text"
                label="Имя и Фамилия владельца карты"
                placeholder="Имя"
            />
            <UiInput 
                v-model="cardInfo.ownerSurname"
                type="text"
                label=""
                placeholder="Фамилия"
            />
        </div>
    </ProfileSettingsForm>
  </template>
  
<script>
import UiInput from '@/components/ui/UiInput.vue'
import ProfileSettingsForm from '@/modules/Landing/components/ProfileSettingsForm.vue'
import { useStore } from 'vuex'
import { ref, onMounted, computed } from 'vue'

export default {
    name: 'ProfileView',
    components: { UiInput, ProfileSettingsForm },
    setup() {
        const store = useStore()
        const user = computed(() => store.getters['user/getUser'])

        const userCard = computed(() => store.getters['user/getUserCard'])

        const cardInfo = ref({
            cardNumber: '',
            expireDateMonth: '',
            expireDateYear: '',
            cardCode: '',
            ownerFirstname: '',
            ownerSurname: ''
        })

        const KEYS_LINK = {
            'cardNumber': 'card_number',
            'expireDateMonth': 'expdate_month',
            'expireDateYear': 'expdate_year',
            'cardCode': 'cvv',
            'ownerFirstname': 'holder_name',
            'ownerSurname': 'holder_surname'
        }
        
        onMounted( async () =>{
            await store.dispatch('user/fetchUserCard', {userId: user.value.id})

            Object.keys(KEYS_LINK).forEach(key => {
                cardInfo.value[key] = userCard.value[KEYS_LINK[key]]
            })
        })
        
        const onCardChangeSubmit = () => {
            const payload = ref({})
            Object.keys(KEYS_LINK).forEach(key => {
                payload.value[KEYS_LINK[key]] = cardInfo.value[[key]]
            })

            store.dispatch('user/updateCard', {...payload.value, user_id: user.value.id})
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