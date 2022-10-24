<template>
  <div class="dropdown" :class="{'dropdown--active': isActive}" @click="toggleActive">
    <div class="dropdown__header">
      <h3 class="dropdown__title">{{title}}</h3>
      <img src="@/assets/img/icons/arrow-down-purple.svg" alt="">
    </div>
    <div class="dropdown__text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'DropdownComponent',
    props: { title: String },
    data() {
      return {
        isActive: false
      }
    },
    methods: {
      toggleActive() {
        this.isActive = !this.isActive
      }
    }
}
</script>
<style lang="scss" scoped>
  .dropdown{
    border: 1px solid $purple-opacity;
    color: #FFF;
    overflow: hidden;

    &__header{
      @include flex-sb-c;
      font-weight: 500;
      padding: 1.5em 2.313em;
      cursor: pointer;

      h3{
        text-transform: none;
        transition: .3s;
        margin-right: 0.5em;
      }
    }

    &__text{
      padding: 0 2.313em;
      font-weight: 400;
      line-height: 24px;
      height: auto;
      max-height: 0;
      transition: .3s;
    }

    &--active{
      .dropdown__header h3{
        color: $purple;
      }

      .dropdown__text{
        padding: 1.5em 2.313em;
        max-height: 500px;
      }
    }
  }
</style>