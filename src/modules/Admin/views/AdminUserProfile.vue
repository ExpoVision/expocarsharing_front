<template>
  <h1>Профиль пользователя</h1>
  <div class="profile">
    <div class="profile__photo-block">
        <img src="@/assets/img/profile_avatar.png" alt="">
    </div>
    <div class="profile__info">
        <div class="profile-row">
            <span class="profile-row__title">ФИО:</span>
            <span class="profile-row__info">Махмудов Айнди Усманович</span>
        </div>
        <div class="profile-row">
            <span class="profile-row__title">Адрес:</span>
            <span class="profile-row__info">Зои и Александра Космодемьянских ул., 35, Москва, 125130</span>
        </div>
        <div class="profile-row">
            <span class="profile-row__title">Тел:</span>
            <span class="profile-row__info">8 928 897 44 44</span>
        </div>
        <div class="profile-row">
            <span class="profile-row__title">Возраст:</span>
            <span class="profile-row__info">27 лет</span>
        </div>
        <div class="profile-row">
            <span class="profile-row__title">Статус:</span>
            <span class="profile-row__info">Авторизован</span>
        </div>
        <div class="profile-row">
            <span class="profile-row__title">Каршеринг (всего):</span>
            <span class="profile-row__info">27:34:30</span>
        </div>
    </div>
  </div>
  <ui-btn 
        width="100%" 
        padding="1em"
        @click="deleteUser()"
    >Удалить пользователя</ui-btn>
</template>

<script>
import UiBtn from '@/components/ui/UiBtn.vue'
export default {
    components: { UiBtn },
    data() {

    },
    methods: {
        deleteUser() {}
    }
}
</script>

<style lang="scss" scoped>
    .profile {
        @include flex-sb-str;
        margin-bottom: 2em;

        &__photo-block {
            margin-right: 1em;
            width: 300px;

            img{
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }

        &-row {
            margin-bottom: .9em;
            line-height: 150%;
            font-size: 1.2rem;
            
            &__title{
                color: $purple;
                margin-right: .8em;
                font-weight: bold;
            }
        }
    }
</style>