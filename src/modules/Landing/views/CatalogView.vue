<template>
  <main class="catalog">
      <div class="wrapper">
          <FiltersComponent 
            @applyFilters="onApplyFilters"
            @resetFilters="onResetFilters"
          />
          <div class="cars">
              <CarComponent 
                  v-for="(car, index) in cars"
                  :key="index"
                  :car="car"
              />
          </div>
          <UiPagination 
            :items="cars"
            :perPage="6"
            @onPageChange="onPageChange"
          />
      </div>
      <FeedbackComponent />
  </main>
</template>

<script>
import CarComponent from '@/components/CarComponent.vue'
import FeedbackComponent from '@/modules/Landing/Sections/FeedbackSection.vue'
import FiltersComponent from '@landing/components/FiltersComponent.vue'
import UiPagination from '@/components/ui/UiPagination.vue'
import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
  name: 'CatalogView',
  components: { CarComponent, FeedbackComponent, FiltersComponent, UiPagination },
  setup() {
      const store = useStore()

      const currentPage = ref(1)

      const cars = [
          {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
          {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
          {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
          {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
          {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
          {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
          {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
          {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
          {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
          {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
          {title: 'MERCEDES E220D', year: 2011, mileage: 166000, color: 'Коричневый', price: 16},
      ]

    const onPageChange = (page) => {
      this.currentPage = page;
    }

    const onApplyFilters = filters => {
        store.dispatch('carsharing/fetchCars', filters.value)
    }

    const onResetFilters = () => {
        store.dispatch('carsharing/fetchCars')
    }

    return {
      currentPage,
      cars,
      onPageChange,
      onApplyFilters,
      onResetFilters,
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
