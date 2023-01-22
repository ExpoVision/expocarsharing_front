<template>
    <div class="filter ui-filter-select" :class="{'filter--active': isActive}">
      <div class="filter__header"  @click="toggleActive">
        <h3 class="filter__title">{{title}}</h3>
        <img class="filter__chevron" src="@/assets/img/icons/arrow-down-purple.svg" alt="" :class="{'filter__chevron--active': isActive}">
      </div>
      <div v-if="isBlocks" class="filter__body">
        <div 
            v-for="(block, index) in items"
            :key="index"
            class="filter__block"
        >
            <h3 v-if="block.title">{{block.title}}</h3>
            <div class="filter__checkboxes">
                <label 
                    v-for="(item, index) in block.items"
                    :key="index"
                >
                  <input 
                    type="checkbox"
                    :value="item.value"
                    v-model="checkedItems"
                    @change="$emit('update:modelValue', checkedItems)"
                  >
                  <span>{{item.label}}</span>
                </label>
            </div>
        </div>
      </div>
      <div v-else class="filter__body">
        <div class="filter__block">
          <div class="filter__checkboxes" :class="{'filter__checkboxes--single-column': type === 'single-column'}">
              <label 
                  v-for="(item, index) in items"
                  :key="index"
              >
                  <input 
                      type="checkbox"
                      :value="item.value"
                      v-model="checkedItems"
                      @change="$emit('update:modelValue', checkedItems)"
                  >
                  <span>{{item.label}}</span>
              </label>
            </div>
        </div>
        
      </div>
    </div>
  </template>
  
  <script>
import { ref } from 'vue'

  export default {
    name: 'UiFilterSelect',
    emits: ['update:modelValue'],
    props: { 
      title: String,
      items: Array ,
      isBlocks: {
        type: Boolean,
        required: false,
        default: false
      },
      type: {
        type: String,
        required: false,
      }
    },
    setup() {

      const isActive = ref(false)
      const toggleActive = () => {
        isActive.value = !isActive.value
      }

      const checkedItems = ref([])
      
      return {
          toggleActive,
          isActive,
          checkedItems
        }
    }
  }
  </script>
  <style lang="scss" scoped>
    .filter{
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
        .filter h3{
          color: $purple;
        }
  
        .filter__body{
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

        &--single-column{
          flex-direction: column;

          label{
            width: 100%;
          }
        }
      }

      &__chevron{
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