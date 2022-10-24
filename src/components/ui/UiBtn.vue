<template>
  <button class="ui-btn" :class="{'ui-btn--white': type}" :style="cssVars">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    width: { 
      type: String,
      required: false,
      default: '362px'
    },
    padding: { 
      type: String,
      required: false,
      default: '1.5em 2em'
    },
    type: {
      type: String,
      required: false,
    }
  },    
  computed: {
    cssVars () {
      return{
        '--width': this.width,
        '--padding': this.padding,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .ui-btn {
        width: var(--width);
        padding: var(--padding);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .8em;
        background-color: $purple;
        color: #FFF;
        border: none;
        text-align: center;
        text-transform: uppercase;
        font-size: 1rem;
        cursor: pointer;
        transition: .3s;

        &:hover, &:active {
          background-color: $lilac;
        }

        &--white {
          background-color: #FFF;
          color: $purple;
          border: 2px solid $purple;

          &:hover, &:active {
            background-color: $purple;
            color: #FFF;
          }
        }
    }
</style>