<template>
    <ProfileSettingsForm title="Настройки">
        <div class="profile__settings-row">
            <UiInput type="text" label="Имя Фамилия" />
            <UiInput type="date" label="Дата рождения" />
        </div>
        <div class="profile__settings-row">
            <UiInput type="text" label="Телефон" />
            <UiInput type="email" label="E-mail" />
        </div>
        <div class="profile__settings-row profile__settings-row--stretch">
            <UiFileAttachment label="Фото" :isPhotoAttachment="true" placeholderTip="Загрузить"/>
            <div class="profile__settings-column">
                <UiFileAttachment label="Паспорт" placeholderTip="Прикрепить"/>
                <UiFileAttachment label="Водительское удостоворение"  placeholderTip="Прикрепить"/>
            </div>
        </div>
    </ProfileSettingsForm>

    <ProfileSettingsForm title="Настройки" btnTitle="Изменить пароль">
        <div class="profile__settings-row">
            <UiInput type="password" label="Введите пароль" />
            <UiInput type="password" label="Введите пароль еще раз" />
        </div>
    </ProfileSettingsForm>

    <ProfileSettingsForm title="Оплата" btnTitle="Сохранить карту">
        <div class="profile__settings-row">
            <UiInput type="text" label="Номер карты" />
            <div class="profile__settings-row profile__settings-expiration-row">
                <div class="expiration">
                    <label>
                        <span>Срок действия</span>
                        <div class="expiration-inputs">
                            <input type="text" placeholder="__" width="68px" />
                            <span>/</span>
                            <input type="text" placeholder="__" width="68px" />
                        </div>
                    </label>
                </div>
                <UiInput type="text" label="CVC / CVV" placeholder="___" />
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
  import UiFileAttachment from '@/components/ui/UiFileAttachment.vue'
  import ProfileSettingsForm from '@/modules/Landing/components/ProfileSettingsForm.vue'
  
  export default {
    name: 'ProfileView',
    components: { UiInput, UiFileAttachment, ProfileSettingsForm },
  }
  </script>
  
  <style lang="scss" scoped>
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

            & > *{
                width: 48%;
            }

            @media screen and (max-width: 865px) {
                flex-direction: column;

                & > *{
                    width: 100%;
                }
            }
        }

        &__settings-column{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
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