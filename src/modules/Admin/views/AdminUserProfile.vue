<template>
  <h1>Профиль пользователя</h1>
  <div class="profile">
    <div class="profile__photo-block">
        <img src="@/assets/img/profile_avatar.png" alt="">
    </div>

    <div class="profile__info">
        <div class="profile-row">
            <span class="profile-row__title">ФИО:</span>
            <span class="profile-row__info">{{userInfo?.name}}</span>
        </div>
        <div class="profile-row">
            <span class="profile-row__title">Email:</span>
            <span class="profile-row__info">{{userInfo?.email}}</span>
        </div>
       <!--  <div class="profile-row">
            <span class="profile-row__title">Адрес:</span>
            <span class="profile-row__info">{{profileInfo?.address}}</span>
        </div> -->
        <div class="profile-row">
            <span class="profile-row__title">Тел:</span>
            <span class="profile-row__info">{{profileInfo?.phone}}</span>
        </div>
        <div class="profile-row">
            <span class="profile-row__title">Возраст:</span>
            <span class="profile-row__info">{{age}}</span>
        </div>
       <!--  <div class="profile-row">
            <span class="profile-row__title">Статус:</span>
            <span class="profile-row__info">{{profileInfo?.status}}</span>
        </div>
        <div class="profile-row">
            <span class="profile-row__title">Каршеринг (всего):</span>
            <span class="profile-row__info">27:34:30</span>
        </div> -->
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
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
    components: { UiBtn },
    setup() {
        const store = useStore()

        const route = useRoute()
        const router = useRouter()

        const userInfo = computed(() => store.getters['admin/getUserById'](route.params.id))
        const profileInfo = computed(() => store.getters['user/getUserProfileInfo'])
        const age = ref('')

        onMounted( async () => {
            await store.dispatch('admin/fetchUsers')
            await store.dispatch('user/fetchUserProfileInfo', {userId: route.params.id})
            
            age.value = calculateAge()
        })

        const deleteUser = () => {
            store.dispatch('admin/deleteUser', {userId: route.params.id})
            router.push({name: 'AdminUsers'})
        }

        const calculateAge = () => { 
            const birthday = new Date(profileInfo.value?.birthday)
            const ageDifMs = Date.now() - birthday.getTime();
            const ageDate = new Date(ageDifMs); 
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }

        return {
            userInfo,
            profileInfo,
            deleteUser,
            age
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

        &__info {
            min-width: 60%;
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