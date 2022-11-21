<template>
    <div class="select" :class="{'select--active': isActive}">
      <div class="select__header"  @click="toggleActive">
        <h3 class="select__title">{{title}}</h3>
        <img src="@/assets/img/icons/arrow-down-purple.svg" alt="">
      </div>
      <div class="select__body">
        <div 
            v-for="(block, index) in blocks"
            :key="index"
            class="select__block"
        >
            <h3 v-if="block.title">{{block.title}}</h3>
            <div class="select__checkboxes">
                <label 
                    v-for="(item, index) in block.items"
                    :key="index"
                >
                    <input 
                        type="checkbox"
                        :value="item.value"
                    >
                    <span>{{item.label}}</span>
                </label>
            </div>
        </div>
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name: 'UiSelectCheckboxes',
      props: { 
        title: String,
        blocks: Array 
    },
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
    .select{
      border: 1px solid $purple-opacity;
      color: #FFF;
      overflow: hidden;
      transition: .3s;
      background: rgba(11, 11, 11, 0.9);
      backdrop-filter: blur(40px);

      &:hover, &:active{
        border-color: $purple;
      }
  
      &__header{
        @include flex-sb-c;
        font-weight: 500;
        padding: 1.5em 2.313em;
        cursor: pointer;
  
        h3{
          text-transform: none;
          transition: .3s;
        }
      }
  
      &__body{
        padding: 0 2.313em;
        font-weight: 400;
        line-height: 24px;
        height: auto;
        max-height: 0;
        transition: .3s;
      }
  
      &--active{
        .select__header h3{
          color: $purple;
        }
  
        .select__body{
          padding: 1.5em 2.313em;
          max-height: 500px;
        }
      }

      &__block{
        font-weight: 400;

        h3{
            color: #FFF;
            margin-bottom: 1.375em;

            &:not(:first-child){
                margin-top: 2.125em;
            }
        }
      }

      &__checkboxes{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 1em;
        

        label{
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            width: 45%;

            span{
                margin-left: 13px;
                color: #FFF;
            }
        }

        input{
          background-color: transparent;
          color: $purple;
        }
      }
    }
  </style>