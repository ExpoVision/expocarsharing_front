<template>
  <div class="profile__info">
    <img :src="BASE_URL + 'users/' + profile?.photo" alt="">
    <div>
      <h2>{{user?.name}}</h2>
      <div class="profile__info-row">
        <h4>Дата рождения:</h4>
        <p>{{birthday}}</p>
      </div>
      <div class="profile__info-row">
        <h4>Номер телефона:</h4>
        <p>{{profile?.phone ?? ''}}</p>
      </div>
      <div class="profile__info-row">
        <h4>E-mail:</h4>
        <p>{{user?.email}}</p>
      </div>
    </div>
  </div>
  <div class="profile__card">
    <h2>Статус каршеринга</h2>
    <div class="profile__card-content">
      <div class="profile__card-row">
        <h3>Завершен:</h3><div>02:10:00</div>
      </div>
      <div class="profile__card-row">
        <h3>Итого:</h3><div>1 920 ₽</div>
      </div>
    </div>
    <ui-btn>Завершить</ui-btn>
  </div>
</template>

<script>
import UiBtn from '@/components/ui/UiBtn.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

import { BASE_URL } from '@/config/index'

export default {
  name: 'ProfileView',
  components: { UiBtn },
  setup() {
    const store = useStore()

    const user = computed(() => store.getters['user/getUser'])
    const profile = computed(() => store.getters['user/getUserProfileInfo'])
    const birthday = computed(() => {
      return profile?.value?.birthday 
            ? new Date(profile?.value?.birthday).toLocaleDateString()
            : ''
    })

    onMounted( async () => {
      await store.dispatch('user/fetchUserProfileInfo', {userId: user?.value?.id})
    })
    return {
      user,
      profile,
      birthday,
      BASE_URL
    }
  }
}
</script>

<style lang="scss" scoped>
  .profile {

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

    &__info{
      border: 1px solid $purple;
      padding: 1.75em;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      img{
        max-width: 293px;
        margin-right: 2.625em;
      }

      h2{
        font-size: 1.5rem;
        font-weight: 300;
        margin-bottom: 1.563em;
        color: #FFF;
        text-transform: none;
      }

      @media screen and (max-width: 885px){
        flex-direction: column;

        img{
          margin: auto;
          margin-bottom: 2em;
        }

        & > div{
          width: fit-content;
          margin: auto;
        }
      }

      @media screen and (max-width: 768px){
        h2{
          margin-bottom: 1em;
        }
      }

      @media screen and (max-width: 560px){
        img{
          width: 100%
        }
      }
    }

    &__info-row{
      display: flex;
      justify-content: flex-start;
      margin-bottom: 1em;

      h4{
        color: $purple-dark;
        margin-right: .75em;
        text-transform: none;
      }

      p{
        white-space: nowrap;
      }
    }

    &__card{
      border: 1px solid $purple;
      padding: 2.812em 4.187em;

      h2{
        color: #FFF;
        font-size: 3em;
        margin-bottom: 1.5em;
      }

      &-content{
        margin-bottom: 2.5em;
      }

      &-row{
        display: flex;
        justify-content: flex-start;
        margin-bottom: .95em;
        font-size: 1.5rem;

        h3{
          color: #FFF; 
          margin-right: .687em;
          text-transform: none;
        }

        div{
          color: $purple;
        }
      }
      @media screen and (max-width: 768px){
        padding: 1.75em;

        h2{ 
          font-size: 2em;
          margin-bottom: 0.7em;
          line-height: 50px;
        }

        &-row{
          margin-bottom: .5em;
        }

        .ui-btn{
          width: 100%;
        }
      }
    }
  }
</style>