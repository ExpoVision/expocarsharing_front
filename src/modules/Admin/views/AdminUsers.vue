<template>
    <h1>Пользователи</h1>
    <input 
        type="text" 
        placeholder="Поиск (все)" 
        class="users-search-input" 
        v-model="search" 
        @input="searchUser()" 
    />
    <ul class="users-list">
        <li 
            class="users-list__item"
            v-for="user in users"
            :key="user.id"
        ><router-link :to="{
            name: 'AdminUserProfile', 
            params: {id: user.id}}"
        >{{user.fullName}}</router-link></li>
    </ul>
</template>

<script>
import { useStore } from 'vuex'
import { ref, computed, onMounted } from 'vue'

export default {
    setup() {
        const store = useStore()

        const searchResult = ref([])
        const search = ref('')

        const usersTotal = computed(() => store.getters['admin/getUsers'])
        const users = computed(() => search.value ? searchResult.value : usersTotal.value)

        const searchUser = () => {
            searchResult.value = usersTotal.value.filter(user => {
                user.fullName.toLowerCase().includes(this.search.toLowerCase())
            })
        }

        onMounted(() => {
            store.dispatch('admin/fetchUsers')
        })

        return {
            users,
            searchUser
        }
    }
}
</script>

<style lang="scss" scoped>
    .users{

        &-search-input {
            display: block;
            width: 100%;
            padding: 1em 1.5em;
            border: 2px solid $purple;
            background-color: #FFF;
            margin-bottom: 2.5em;
            border-radius: 35px;
            color: $purple;
        }
    
        &-list {
            &__item {
                border: 1px solid $purple;
                transition: .3s;
                font-size: 1.2rem;

                &:not(:last-child) {
                    margin-bottom: 1em;
                }

                a{
                    display: block;
                    width: 100%;
                    padding: 1em 1.5em;
                    background-color: #DDD;
                    text-decoration: none;
                    font-weight: 500;
                    transition: .3s;

                    &:hover,
                    &:active {
                        background-color: $purple-dark;
                        color: #FFF;
                    }
                }
            }
        }
    }
</style>