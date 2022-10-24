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

    <section class="testimonials">
      <div class="wrapper">
        <h2 class="testimonials__heading heading">Отзывы<br> наших<br> клиентов</h2>
        <TestimonialsList :testimonials="testimonials"></TestimonialsList>
        <a href="#" class="testimonials__more-link">загрузить еще</a>
      </div>
      <SliderSection 
        v-if="showTestimonialsSlider" 
        title="Отзывы наших клиентов" 
        :elements="testimonials" 
        type="testimonials" 
      />
    </section>
    <FaqSection />
    <FeedbackSection />
  </main>
</template>

<script>
import UiBtn from '@/components/ui/UiBtn.vue'
import FeedbackSection from '@/modules/Landing/Sections/FeedbackSection.vue'
import SliderSection from '@/modules/Landing/Sections/SliderSection.vue'
import FaqSection from '@/modules/Landing/Sections/FaqSection.vue'
import TestimonialsList from '@/modules/Landing/components/TestimonialsList.vue'


export default {
  name: 'HomeView',
  components: { UiBtn, FeedbackSection, SliderSection, FaqSection, TestimonialsList, },
  data() {
    return {
      cars: [
        {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
        {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
        {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
        {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
        {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
        {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
      ],
      testimonials: [
        { text: "Хочу выразить огромную благодарность сотрудникам автосалона находящихся по адресу: г. Москва ул. Красного Маяка 16, а именно менеджеру по запчастям Артему и мастеру по ремонту Павлу за их качество обслуживания, вежливость, отзывчивость, искреннее внимание к клиенту и оперативность. У нас была сложная ситуация, так как машина загорелась, сгорела проводка и другие запчасти. Обращались в разные автосалоны но безрезультатно. А вот с их стороны все запчасти нашли сразу, не было никаких навязчивых предложений о дополнительных опциях в машину, все общение было на профессиональном уровне, ничего лишнего. Машину отремонтировали быстро и качественно. Большое СПАСИБО )",
          author: 'Михаил Сметанин',
          authorPosition: 'Директор в Wellness Park'
        },
        { text: "Хочу выразить огромную благодарность сотрудникам автосалона находящихся по адресу: г. Москва ул. Красного Маяка 16, а именно менеджеру по запчастям Артему и мастеру по ремонту Павлу за их качество обслуживания, вежливость, отзывчивость, искреннее внимание к клиенту и оперативность. У нас была сложная ситуация, так как машина загорелась, сгорела проводка и другие запчасти. Обращались в разные автосалоны но безрезультатно. А вот с их стороны все запчасти нашли сразу, не было никаких навязчивых предложений о дополнительных опциях в машину, все общение было на профессиональном уровне, ничего лишнего. Машину отремонтировали быстро и качественно. Большое СПАСИБО )",
          author: 'Михаил Сметанин',
          authorPosition: 'Директор в Wellness Park'
        },
        { text: "Хочу выразить огромную благодарность сотрудникам автосалона находящихся по адресу: г. Москва ул. Красного Маяка 16, а именно менеджеру по запчастям Артему и мастеру по ремонту Павлу за их качество обслуживания, вежливость, отзывчивость, искреннее внимание к клиенту и оперативность. У нас была сложная ситуация, так как машина загорелась, сгорела проводка и другие запчасти. Обращались в разные автосалоны но безрезультатно. А вот с их стороны все запчасти нашли сразу, не было никаких навязчивых предложений о дополнительных опциях в машину, все общение было на профессиональном уровне, ничего лишнего. Машину отремонтировали быстро и качественно. Большое СПАСИБО )",
          author: 'Михаил Сметанин',
          authorPosition: 'Директор в Wellness Park'
        }
      ],
      showTestimonialsSlider: false
    }
  },
  methods: {
    toCatalog() {
      this.$router.push({name: 'Catalog'})
    },
    toggleTestimonialsView() {
      if (window.innerWidth <= 768) {
        this.showTestimonialsSlider = true
      } else {
        this.showTestimonialsSlider = false
      }
    }
  },
  created() {
    window.addEventListener('resize', this.onResize)
    this.toggleTestimonialsView()
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
  },
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

  .testimonials{
    padding: 3.562em 0;
    background: url('@/assets/img/testimonials_bg.png') no-repeat top right;

    @media screen and (max-width: 768px){
      padding-bottom: 15em;
      background-position: bottom center;
      background-size: 100%;
        
      .wrapper{
        display: none;
      }
    }

    &__heading{
      color: $purple-dark;
      margin-bottom: .635em;
    }

    &__more-link{
      width: 140px;
      display: block;
      margin: auto;
      padding-bottom: .5em;
      border-bottom: 1px solid $purple;
      color: $purple;
      font-weight: 500;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      transition: .3s;

      &:hover, &:active{
        color: $lilac;
        border-color: $lilac;
      }

      @media screen and (max-width: 865px){
        display: none;
      }
    }

    &__slider{
      display: none;

      @media screen and (max-width: 865px){
        display: block;
      }
    }
  }

</style>
