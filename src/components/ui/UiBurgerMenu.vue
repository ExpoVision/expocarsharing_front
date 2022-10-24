<template>
  <div class="burger-menu"  @click="$emit('toggleMobileMenu')">
    <div class="burger-menu-top">
    <div class="logo">Лого</div>
    </div>
    <div class="burger-menu-nav">
        <MainNav type="mobile-visible mobile-visible--left"></MainNav>
    </div>
    <a class="signin" @click="toProfile">
        <img src="@/assets/img/icons/avatar-white.svg" alt="">
        Войти
    </a>
    </div>
</template>

<script>
import MainNav from '@/components/MainNavComponent.vue';
export default {
    name: "UiBurgerMenu",
    components: { MainNav },
    methods: {
        toProfile() {
        this.$router.push({name: 'Profile'})
      },
    }
}
</script>

<style lang="scss" scoped>

.burger-menu {
    z-index: 10000;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: $purple;
    color: #FFF;
    min-height: 100vh;
    text-align: left;
    padding: 1.625em 4.385em;
    transition: .3s;
    

    @media screen and (max-width: 512px){
        padding: 1.625em 1.875em;
    }

    &-top{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 2.375em;

        .logo {
            font-weight: bold;
        }
    }

    .main-nav{
        margin-bottom: 2.125em;
    }

    .signin {
        @include flex-sb-c;
        color: #FFF;
        cursor: pointer;

        img {
          margin-right: 1em;
          width: 20px;
        }
      }
}
</style>