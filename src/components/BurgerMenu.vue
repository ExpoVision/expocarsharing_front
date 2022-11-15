<template>
  <div class="burger-menu">
    <div class="burger-menu-top">
      <div class="logo">Лого</div>
    </div>
    <div class="burger-menu-nav"  @click="$emit('toggleMobileMenu')">
        <MainNav type="mobile-visible mobile-visible--left"></MainNav>
    </div>
    <a class="signin" @click="openSigninModal">
        <img src="@/assets/img/icons/avatar-white.svg" alt="">
        Войти
    </a>
  </div>
  <LoginModal :show="showLoginModal" @close="closeLoginModal" @openSignupModal="openSignupModal" />
  <SignupModal :show="showSignupModal" @close="closeSignupModal" />
</template>

<script>
import MainNav from '@/components/MainNavComponent.vue'
import LoginModal from '@/components/auth/LoginModal.vue'
import SignupModal from '@/components/auth/SignupModal.vue'

export default {
    emits: ['toggleMobileMenu'],
    name: 'BurgerMenu',
    components: { MainNav, LoginModal, SignupModal },
    data() {
      return {
        showLoginModal: false,
        showSignupModal: false,
      }
    },
    methods: {
      toProfile() {
        this.$router.push({name: 'Profile'})
      },
      openSigninModal(){
        this.showLoginModal = true
        document.body.classList.add('modal-open')
      },
      openSignupModal(){
        this.showLoginModal = false
        this.showSignupModal = true
      },
      closeLoginModal(){
        this.showLoginModal = false
        document.body.classList.remove('modal-open')
      },
      closeSignupModal(){
        this.showSignupModal = false
        document.body.classList.remove('modal-open')
      }
    }
}
</script>

<style lang="scss" scoped>

.burger-menu {
    z-index: 1000;
    position: fixed;
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
        padding: 1.825em 1.875em;
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