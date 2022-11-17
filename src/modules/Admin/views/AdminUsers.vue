<template>
    <h1>Пользователи</h1>
    <input type="text" placeholder="Поиск (все)" class="users-search-input" v-model="search" @input="searchUser()" />
    <ul class="users-list">
        <li 
            class="users-list__item"
            v-for="user in users"
            :key="user.id"
        ><router-link :to="{name: 'AdminUserProfile', params: {id: user.id}}">{{user.fullName}}</router-link></li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            searchResult: [],
            search: ''
        }
    },
    computed: {
        usersTotal() {
            return this.$store.getters.getUsers
        },
        users() {
            return this.search ? this.searchResult : this.usersTotal
        },
    },
    methods: {
        searchUser() {
            this.searchResult = this.usersTotal.filter(user => user.fullName.toLowerCase().includes(this.search.toLowerCase()))
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