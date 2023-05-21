<template>
    <section class="feedback">
      <div class="wrapper">
        <h2 class="feedback__heading">Остались вопросы?</h2>
        <p class="feedback__text">Оставьте заявку и мы свяжемся с вами</p>
        <form class="feedback__form" @submit.prevent="sendFeedback">
          <ui-input 
            type="text" 
            v-model="formData.name"
            placeholder="Ваше Имя" 
          ></ui-input>
          <ui-input 
            type="text" 
            v-model="formData.phoneNumber"
            placeholder="+ 7 ___ ___ - __ - __" 
          ></ui-input>
          <ui-btn>Оставить заявку</ui-btn>
        </form>
        <p class="feedback__personal-data">Нажимая кнопку «Оставить заявку», вы даете согласие 
          на обработку своих персональных данных в соответствии со статьей 9 Федерального 
          закона от 27 июля 2006 г. № 152-ФЗ «О персональных данных»
        </p>
      </div>
    </section>
  </template>
  
  <script>
  import UiInput from '@/components/ui/UiInput.vue'
  import UiBtn from '@/components/ui/UiBtn.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
  
  export default {
      name: 'FeedbackSection',
      components: { UiInput, UiBtn },
      setup() {
        const store = useStore()

        const name = ref('')
        
        const formData = ref({
          name: '',
          phoneNumber: ''
        })

        const sendFeedback = async () => {
          await store.dispatch('sendFeedback', formData.value)
          formData.value.name = ''
          formData.value.phoneNumber = ''
        }

        return {
          formData,
          name,
          sendFeedback
        }
      }
  }
  </script>
  
  <style lang="scss" scoped>
    .feedback {
      background-color: $purple-opacity-bg;
      padding: 3.625em 0;

      &__heading{
        margin-bottom: .56em;
        font-size: 3rem;
      }

      &__text{
        font-size: 1.125rem;
        margin-bottom: 1.75em;
      }

      &__form{
        @include flex-sb-c;
        margin-bottom: 1.625em;

        .ui-input{
          width: 362px;
          margin-right: 1.875em;
        }

        @media screen and (max-width: 970px) {
          flex-wrap: wrap;

          .ui-input{
            width: 100%;
            margin-right: 0;
            margin-bottom: 13px;
          }

          .ui-btn{
            width: 100%;
            margin-top: 20px;
          }
        }
      }

      &__personal-data{
        color: $purple;
        font-size: .875rem;
        line-height: 22px;
      }
    }
  </style>