<template>
    <input 
        class="ui-input"
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
    }
  }
  </script>
  
  <style lang="scss" scoped>
    input{
        display: block;
        background-color: transparent;
        color: $purple;
        border: 1px solid $purple-opacity;
        padding: 1.5em 2em;
    }
  </style>