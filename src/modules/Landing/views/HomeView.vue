<template>
  <main class="home">
    <section class="intro">
      <div class="wrapper">
        <h1 class="intro__heading heading">Каршеринг <br>автомобилей <br>в Москве</h1>
        <ui-btn @click="toCatalog">
          Смотреть каталог
          <img src="@/assets/img/icons/arrow-right.svg" alt="">
        </ui-btn>
      </div>
    </section>

    <SliderSection title="Комфорт" :elements="cars" type="cars" />
    <SliderSection title="Бизнес" :elements="cars" type="cars" />
    <SliderSection title="Представительский" :elements="cars" type="cars" />
    <SliderSection title="Спорт" :elements="cars" type="cars" />
    <SliderSection title="Luxury" :elements="cars" type="cars" />

    <TestimonialsSection />
    <FaqSection />
    <FeedbackSection />
  </main>
</template>

<script>
import UiBtn from '@/components/ui/UiBtn.vue'
import SliderSection from '@/modules/Landing/Sections/SliderSection.vue'
import TestimonialsSection from '@landing/Sections/TestimonialsSection.vue'
import FaqSection from '@/modules/Landing/Sections/FaqSection.vue'
import FeedbackSection from '@/modules/Landing/Sections/FeedbackSection.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed, /* onMounted, */ } from 'vue'


export default {
  name: 'HomeView',
  components: { UiBtn, FeedbackSection, SliderSection, FaqSection, TestimonialsSection },
  setup(){
    const store = useStore()
    const router = useRouter()

    const cars = computed(() => store.getters['carhsarin/getCars'])

    const toCatalog = () => {
      router.push({name: 'Catalog'})
    }

    //BackFlag - uncomment
   /*  onMounted(() => {
      store.dispatch('fetchFaqItems')
    }) */

    return {
      cars,
      toCatalog,
    }
  }
  
}
</script>

<style lang="scss" scoped>

  .intro {
    height: 70vh;
    padding: 3.5em 0;
    background: url('@/assets/img/intro_bg.png') no-repeat top right / cover;
    background-size: 70%;
    margin-bottom: 2em;

    &__heading {
      line-height: 80px;
      margin-bottom: 138px;
      font-weight: 300;
      
    }

    @media screen and (max-width: 768px){
      height: 100vh;
      background-color: #000;
      background-size: 100%;
      background-position: bottom center;
      position: relative;
      margin-bottom: 120px;

      &__heading{
        font-size: 4.375rem;
      }

      .ui-btn{
        position: absolute;
        bottom: -7%;
      }
    }

    @media screen and (max-width: 658px){
      height: 75vh;
      background-position: 43% 95%;
      background-size: 188%;

      &__heading{
        font-size: 2.7rem;
        line-height: 60px;
      }

      .ui-btn{
        bottom: -5%;
        width: 75%;
        left: 10%;
        font-size: .8rem;
        gap: 1.3em;
      }
    }
  }

</style>
