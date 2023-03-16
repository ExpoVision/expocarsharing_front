<template>
  <main class="catalog">
      <div class="wrapper">
          <FiltersComponent 
            @applyFilters="onApplyFilters"
            @resetFilters="onResetFilters"
          />
          <div class="cars">
              <OfferComponent 
                  v-for="(offer, index) in offers"
                  :key="index"
                  :offer="offer"
              />
          </div>
          <UiPagination 
            :items="offers"
            :perPage="6"
            @onPageChange="onPageChange"
          />
      </div>
      <FeedbackComponent />
  </main>
</template>

<script>
import OfferComponent from '@/components/OfferComponent.vue'
import FeedbackComponent from '@/modules/Landing/Sections/FeedbackSection.vue'
import FiltersComponent from '@landing/components/FiltersComponent.vue'
import UiPagination from '@/components/ui/UiPagination.vue'
import { useStore } from 'vuex'
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'CatalogView',
  components: { OfferComponent, FeedbackComponent, FiltersComponent, UiPagination },
  setup() {
    const store = useStore()

    const offers = computed(() => store.getters['carsharing/getOffers'])

    const currentPage = ref(1)

    const onPageChange = (page) => {
      this.currentPage = page;
    }

    onMounted(() => {
      store.dispatch('carsharing/fetchOffers')
    })

    const onApplyFilters = filters => {
      store.dispatch('carsharing/fetchOffers', filters.value)
    }

    const onResetFilters = () => {
        store.dispatch('carsharing/fetchOffers')
    }

    return {
      currentPage,
      offers,
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
