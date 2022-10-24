<template>
  <header>
    <div class="wrapper">
      <div class="logo">Лого</div>
      <MainNav type="mobile-hidden" @toggleMobileMenu="toggleMobileMenu"></MainNav>
      <a class="signin" @click="toProfile">
        <img src="@/assets/img/icons/avatar.svg" alt="">
        Войти
      </a>
      <UiBurgerMenu v-if="isActive" @toggleMobileMenu="toggleMobileMenu"></UiBurgerMenu>

      <div class="burger-menu-icon" @click="toggleMobileMenu" :class="{'is-active': isActive}">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
import MainNav from '@/components/MainNavComponent.vue'
import UiBurgerMenu from '@/components/ui/UiBurgerMenu.vue';


export default {
    name: 'LandingHeader',
    components: { MainNav, UiBurgerMenu },
    data() {
      return {
        isActive: false
      }
    },
    methods: {
      toProfile() {
        this.$router.push({name: 'Profile'})
      },
      toAdminPanel() {
        this.$router.push({name: 'carsharingstatus'})
      },
      toggleMobileMenu(){
        this.isActive = !this.isActive
      }
    }
}
</script>

<style lang="scss" scoped>
    header {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
			text-transform: uppercase;
      padding: 1.625em 0;

      .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        font-weight: bold;
      }

      .signin {
        @include flex-sb-c;
        color: $purple;
        cursor: pointer;

        @media screen and (max-width: 971px) {
          display: none;
        }

        img {
          margin-right: 1em;
        }
      }
    }
</style>