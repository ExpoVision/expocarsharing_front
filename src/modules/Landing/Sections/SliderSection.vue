<template>
    <section class="slider-section">
        <div class="wrapper">
          <h2>{{title}}</h2>
        </div>
        <SliderComponent :elements="elements" :type="type" :slidesNumberPerPage="slidesNumberPerPage"/>
    </section>
  </template>
  
  <script>
import SliderComponent from '@/components/SliderComponent.vue';
  
  export default {
      name: 'SliderSection',
      props: {
        title: String,
        elements: Array,
        type: String,
        slidesNumberPerPage: Number,
      },
      components: { SliderComponent },
  }
  </script>
  
  <style lang="scss" scoped>
    .slider-section{
      padding: 2.94em 0;
      overflow: hidden;

      h2{
        color: $purple-dark;
        margin-bottom: 1.875rem;
        font-weight: 500;
        font-size: 3.375rem;
        word-break: break-word;

        @media screen and (max-width: 658px){
          
          font-size: 3rem;
        }
      }
    }
  </style>