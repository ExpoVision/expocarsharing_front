<template>
  <div class="select-wrapper" @click="toggleActive">
    <select 
      class="select ui-select"
      @change="onSelectChange"
    >
      <option selected disabled hidden>{{title ?? 'Выбрать'}}</option>
      <option 
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >{{option.label}}</option>
    </select>
    <img 
      class="select__chevron" 
      src="@/assets/img/icons/arrow-down-purple.svg" 
      alt="" 
      :class="{'select__chevron--active': isActive}" 
    />
  </div>
</template>

<script>
import { ref } from 'vue'


export default {
  name: 'UiSelect',
  emits: ['change'],
  props: { 
    title: String,
    options: Array,
  },
  setup(_, { emit }) {
    const isActive = ref(false)
    const toggleActive = () => {
      isActive.value = !isActive.value
    }

    const onSelectChange = (event) => {
      toggleActive()
      emit('change', event.target.value)
    }

    return {
      isActive,
      toggleActive,
      onSelectChange
    }
  }
}
</script>
<style lang="scss" scoped>
  .select-wrapper{
    position: relative;
  }

  .select{
    width: 100%;
    border: 1px solid $purple-opacity;
    color: #FFF;
    transition: .3s;
    background: rgba(11, 11, 11, 0.9);
    backdrop-filter: blur(40px);
    padding: 1.5em 2em;
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    cursor: pointer;

    &:hover, &:active{
      border-color: $purple;
      color: $purple;
    }

    &__chevron{
      position: absolute;
      z-index: 1;
      top: 1.7em;
      right: 2em;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -o-user-select :none;
      user-select: none;
      pointer-events: none;
      transition: .3s;

      &--active{
        transform: rotate(-180deg);
      }
    }
  }
</style>