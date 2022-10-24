<template>
    <LandingHeader />
    <router-view />
    <LandingFooter />
  </template>
  
  <script>
  import LandingHeader from '@/layouts/parts/LandingHeader.vue'
  import LandingFooter from '@/layouts/parts/LandingFooter.vue'
  
  export default {
    components: { 
        LandingHeader, 
        LandingFooter, 
    }
  }
  </script>
  
  <style></style>
  