<template>
  <aside class="admin-aside">
    <div class="admin-aside__top">
      <div class="admin-aside__avatar-block"> 
        <img src="@/assets/img/single_car.png" alt="">
      </div>
      <div>
        <h2>
          Администратор
        </h2>
        <router-link to="/">Выйти</router-link>
      </div>
    </div>

    <nav class="admin-nav">
      <ul class="admin-nav__items">
        <li 
          v-for="(item, index) in navItems"
          :key="index"
        >
          <ui-btn 
            width="100%" 
            padding="1em"
            @click="this.$router.push(item.link)"
          >{{item.label}}</ui-btn>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import UiBtn from '@/components/ui/UiBtn.vue'

export default {
    setup() {
        const navItems = [
            { label: "Статус каршеринга", to: "" },
            { label: "Карта", to: "" },
            { label: "Статистика", to: "" },
            { label: "Контент", to: "" },
            { label: "Пользователи", to: "" },
            { label: "Настройки", to: "" },
            { label: "Запросы поддержки", to: "" },
        ];
        return {
            navItems
        };
    },
    components: { UiBtn }
}
</script>

<style lang="scss" scoped>
    .admin-aside{
        min-height: 100vh;
        width: 25%;

        &__top{
          @include flex-fs-c;
          margin-bottom: 2em;

          h2{
            margin-bottom: .5em;
            color: #FFF;
          }

          a{
            text-decoration: none;
            color: $purple;
            font-weight: 500;
          }
        }

        &__avatar-block{
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid $purple;
          margin-right: .8em;

          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .ui-btn{
          margin-bottom: 1em;
          text-transform: none;
        }
    }
</style>