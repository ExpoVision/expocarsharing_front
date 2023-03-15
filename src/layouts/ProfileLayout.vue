<template>
    <LandingHeader />

    <div class="profile">
        <div class="wrapper">
            <BreadcrumbsComponent />
            <div class="profile__body">
                <aside class="profile__aside">
                    <ul>
                        <li><router-link to="/profile">Мой профиль</router-link></li>
                        <li><router-link to="/profilesettings">Настройки</router-link></li>
                        <li class="signout-li">
                            <a @click.prevent="onLogout">
                                <img src="@/assets/img/icons/signout.svg" alt="">Выход
                            </a>
                        </li>
                    </ul>
                </aside>
                <main class="profile__main">
                    <router-view></router-view>
                </main>
            </div>
        </div>
    </div>
    <LandingFooter />
  </template>
  
  <script>
  import LandingHeader from '@/layouts/parts/LandingHeader.vue'
  import LandingFooter from '@/layouts/parts/LandingFooter.vue'
  import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
  
  export default {
    components: { 
        LandingHeader, 
        LandingFooter, 
        BreadcrumbsComponent,
    },
    setup() {
        const store = useStore()
        const router = useRouter()

        const onLogout = async () => {
            await store.commit('user/logout')
            router.push({name: 'Home'})
        }

        return {
            onLogout
        }
    }
  }
  </script>
  
<style lang="scss" scoped>
    .profile {
        padding: 1.5em 0;

        &__body{
        display: flex;
        }

        &__aside{
        margin-right: 2em;
        width: 20%;

        li{
            margin-bottom: 1em;

            &.signout-li a{
            display: flex;
            justify-content: flex-start;
            align-items: center;

            img{
                margin-right: .625em;
            }
            }

            a{
            display: block;
            color: #FFF;
            text-decoration: none;
            transition: .3s;

            &:hover, &:active{
                color: $purple;
            }
            }
        }
        }

        &__main{
        width: 75%;
        display: flex;
        flex-direction: column;
        gap: 2.16em;
        }


        @media screen and (max-width: 1170px) {
        &__body{
            flex-direction: column;
        }

        &__aside{
            width: 100%;
            margin-right: 0;
            margin-bottom: 2em;
        }

        &__main{
            width: 100%;
        }
        }
    }
</style>
  