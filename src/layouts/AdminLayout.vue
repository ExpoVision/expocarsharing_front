<template>
  <div class="admin__layout">
    <div class="admin__wrapper">
      <AdminAside />
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import AdminAside from '@/layouts/parts/AdminAside.vue';
export default {
    components: { AdminAside }
}
</script>

<style lang="scss">
  .admin__layout{
    background-image: url('@/assets/img/abstract-bg.jpg');
    background-size: 100% 100%;
  }
  .admin__wrapper{
    display: flex;
    justify-content: space-between;
    padding: 3em 4em;

    & > * {
      padding: 2em 2.5em;
      border: 1px solid $purple;
      background-color: rgba($color: #000, $alpha: .9)
    }

    main{
      width: 73%;
      min-height: 100vh;

      h1{
        font-size: 2rem;
        border-bottom: 3px solid $purple;
        padding-bottom: .3em;
        margin-bottom: 1em;
      }
    }
  }


</style>