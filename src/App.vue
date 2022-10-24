<template>
  <component :is="layout" v-if="layout"></component>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AdminLayout from '@/layouts/AdminLayout.vue'
import LandingLayout from '@/layouts/LandingLayout.vue'
import '@/assets/styles/css/normalize.css'
import '@/assets/styles/css/reset.css'
import '@/assets/styles/scss/style.css'

export default {
  components: { AdminLayout, LandingLayout },
  setup() {
    const route = useRoute();
    const layout = computed(() => route.meta.layout)
    return {
      layout
    }
  },
}
</script>

<style></style>
