<template>
  <header>
    <div class="wrapper">
      <div class="logo">Лого</div>
      <MainNav type="mobile-hidden" @toggleMobileMenu="toggleMobileMenu"></MainNav>
      <a class="signin" @click="openSigninModal">
        <img src="@/assets/img/icons/avatar.svg" alt="">
        Войти
      </a>
      <BurgerMenu v-if="isActive" @toggleMobileMenu="toggleMobileMenu"></BurgerMenu>

      <div class="burger-menu-icon" @click="toggleMobileMenu" :class="{'is-active': isActive}">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>

  <LoginModal :show="showLoginModal" @close="closeLoginModal" @openSignupModal="openSignupModal" />
  <SignupModal :show="showSignupModal" @close="closeSignupModal" />
</template>

<script>
import MainNav from '@/components/MainNavComponent.vue'
import BurgerMenu from '@/components/BurgerMenu.vue'
import LoginModal from '@/components/auth/LoginModal.vue'
import SignupModal from '@/components/auth/SignupModal.vue'

export default {
    name: 'LandingHeader',
    components: { MainNav, BurgerMenu, LoginModal, SignupModal },
    data() {
      return {
        isActive: false,
        showLoginModal: false,
        showSignupModal: false,
      }
    },
    methods: {
      toAdminPanel(){
        this.$router.push({name: 'carsharingstatus'})
      },
      toggleMobileMenu(){
        this.isActive = !this.isActive

        if(this.isActive) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'auto'
        }
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

        img {
          margin-right: 1em;
          width: 20px;
        }

        @media screen and (max-width: 970px) {
          display: none;
        }
      }
    }
</style>