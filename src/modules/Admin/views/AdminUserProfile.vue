<template>
  <h1>Профиль пользователя</h1>
  <div class="profile">
    <div class="profile__photo-block">
        <img src="@/assets/img/profile_avatar.png" alt="">
    </div>

    <!-- BlackFlag - заменить названия полей не соотствующие -->
    <div class="profile__info">
        <div class="profile-row">
            <span class="profile-row__title">ФИО:</span>
            <span class="profile-row__info">{{user.name}}</span>
        </div>
        <div class="profile-row">
            <span class="profile-row__title">Адрес:</span>
            <span class="profile-row__info">{{user.address}}</span>
        </div>
        <div class="profile-row">
            <span class="profile-row__title">Тел:</span>
            <span class="profile-row__info">{{user.phoneNumber}}</span>
        </div>
        <div class="profile-row">
            <span class="profile-row__title">Возраст:</span>
            <span class="profile-row__info">{{user.age}}</span>
        </div>
        <div class="profile-row">
            <span class="profile-row__title">Статус:</span>
            <span class="profile-row__info">{{user.status}}</span>
        </div>
        <div class="profile-row">
            <span class="profile-row__title">Каршеринг (всего):</span>
            <!-- BlackFlag - заменить названиe поля не соотствующее -->
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
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
    components: { UiBtn },
    setup() {
        const store = useStore()
        const route = useRoute()
        const router = useRouter()

        const userId = route.params.id
        const user = computed(() => store.getters['admin/getUserById', userId])

        const deleteUser = () => {
            store.dispatch('admin/deleteUser', userId)
            router.push({name: 'AdminUsers'})
        }

        return {
            user,
            deleteUser
        }
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