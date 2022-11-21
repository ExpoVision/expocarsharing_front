<template>
    <label v-if="label" class="ui-input-label">
      <span>{{label}}</span>
      <input 
        class="ui-input"
        :type="type"
        :placeholder="placeholder"
      />
    </label>
    <input 
      v-else
      class="ui-input ui-input--single"
      :type="type"
      :placeholder="placeholder"
    />
  </template>
  
  <script>
  export default {
    props: {
        type: String,
        placeholder: String,
        width: String,
        label: {
          type: String,
          required: false,
        }
    },
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
            width: 100%;/* 
            margin-right: 0;
            margin-bottom: 13px; */
          }
        }
    }

  </style>