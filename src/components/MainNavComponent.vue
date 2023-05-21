<template>
  <nav class="main-nav" :class="type">
    <ul class="main-nav__items">
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/catalog">Каталог</router-link></li>
        <li><router-link to="/terms">Условия</router-link></li>
        <li><router-link to="/">Контакты</router-link></li>
        <li><router-link to="/">О нас</router-link></li>
    </ul>  
  </nav>
</template>

<script>
export default {
  name: 'MainNav',
  props: {
    //mobile-hidden, mobile-hidden, mobile-visible--left
    type: String
  }
}
</script>

<style lang="scss" scoped>
  .main-nav{
    width: fit-content;

    @media screen and (max-width: 1155px) {
      font-size: .8rem;
    }

    &.mobile-hidden{
      @media screen and (max-width: 970px) {
        display: none;
      }
    }

    &.mobile-visible{
      @media screen and (max-width: 970px) {
        .main-nav__items{
          flex-direction: column;
          text-align: center;
          font-size: 1rem;

          li{
            margin-right: 0;
            margin-bottom: 1em;

            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }

    &.mobile-visible--left{
      @media screen and (max-width: 970px) {
        .main-nav__items{
          text-align: left;
        }
      }
    }
  
    &__items{
      display: flex;

      li{
        margin-right: 1.5em;
        @media screen and (max-width: 1155px) {
          margin-right: 1em;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }

    a{
      color: #FFF;
      text-decoration: none;
      transition: .2s;

      &:hover{
        color: $purple;
      }
    }
  }
</style>