<template>
  <main class="catalog">
      <div class="wrapper">
          <UiFilters />
          <div class="cars">
              <CarComponent 
                  v-for="(car, index) in cars"
                  :key="index"
                  :car="car"
              />
          </div>
      </div>
      <FeedbackComponent />
  </main>
</template>

<script>
import CarComponent from '@/components/CarComponent.vue'
import FeedbackComponent from '@/modules/Landing/Sections/FeedbackSection.vue'
import UiFilters from '@/components/ui/UiFilters.vue'

export default {
  name: 'CatalogView',
  components: { CarComponent, FeedbackComponent, UiFilters },
  data() {
    return {
      cars: [
          {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
          {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
          {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
          {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
          {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
          {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .catalog{
      .cars{
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.8em; 
          margin-bottom: 4.5em;

          @media screen and (max-width: 975px){
            grid-template-columns: 1fr;
            justify-items: center;
          }
      }
  }

</style>
