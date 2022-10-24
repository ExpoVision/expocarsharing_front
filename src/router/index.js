import { createRouter, createWebHistory } from 'vue-router'

/***  Landing views  ***/
import HomeView from '@/modules/Landing/views/HomeView.vue'
import ProfileView from '@/modules/Landing/views/ProfileView.vue'
import CatalogView from '@/modules/Landing/views/CatalogView.vue'
import TermsView from '@/modules/Landing/views/TermsView.vue'
import CarsharingView from '@/modules/Landing/views/CarsharingView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      layout: 'LandingLayout'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView,
    meta: {
      layout: 'LandingLayout'
    }
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: CatalogView,
    meta: {
      layout: 'LandingLayout'
    }
  },
  {
    path: '/terms',
    name: 'Terms',
    component: TermsView,
    meta: {
      layout: 'LandingLayout'
    }
  },
  {
    path: '/carsharing',
    name: 'Carsharing',
    component: CarsharingView,
    meta: {
      layout: 'LandingLayout'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
