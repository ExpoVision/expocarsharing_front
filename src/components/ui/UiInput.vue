<template>
    <label v-if="label" class="ui-input-label">
      <span>{{label}}</span>
      <input 
        class="ui-input"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </label>
    <input 
      v-else
      class="ui-input ui-input--single"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </template>
  
  <script>
  export default {
    props: {
      modelValue: [String, Number, null],
      type: String,
      placeholder: String,
      width: String,
      label: {
        type: String,
        required: false,
      }
    },
    emits: ['update:modelValue']
  }
  
  </script>
  
  <style lang="scss" scoped>
    .ui-input-label{
      margin-bottom: 1.813em;
      
      span{
        display: block;
        margin-bottom: 1.1em;
        font-size: 1rem;
        color: $purple-dark;
      }
    }

    .ui-input{
        display: block;
        width: 100%;
        background-color: transparent;
        color: $purple;
        border: 1px solid $purple-dark;
        padding: 1.5em 2em;

        @media screen and (max-width: 970px) {

          input{
            width: 100%;
          }
        }
    }

  </style>