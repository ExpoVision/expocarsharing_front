<template>
  <LandingHeader />
  <div class="wrapper">
    <BreadcrumbsComponent v-if="$route.path !== '/'"/>
  </div>
  <router-view />
  <LandingFooter />
</template>

<script>
import LandingHeader from '@/layouts/parts/LandingHeader.vue'
import LandingFooter from '@/layouts/parts/LandingFooter.vue'
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue'

export default {
  components: { 
      LandingHeader, 
      LandingFooter, 
      BreadcrumbsComponent
  }
}
</script>

<style></style>
