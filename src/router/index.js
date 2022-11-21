import { createRouter, createWebHistory } from 'vue-router'

/***  Landing views  ***/
import HomeView from '@/modules/Landing/views/HomeView.vue'
import ProfileView from '@/modules/Landing/views/ProfileView.vue'
import ProfileSettingsView from '@/modules/Landing/views/ProfileSettingsView.vue'
import CatalogView from '@/modules/Landing/views/CatalogView.vue'
import TermsView from '@/modules/Landing/views/TermsView.vue'
import CarsharingView from '@/modules/Landing/views/CarsharingView.vue'

/***  Admin views  ***/
import AdminCarsharingStatus from '@/modules/Admin/views/AdminCarsharingStatus.vue'
import AdminCarsharingInfo from '@/modules/Admin/views/AdminCarsharingInfo.vue'
import AdminStatistics from '@/modules/Admin/views/AdminStatistics.vue'
import AdminUsers from '@/modules/Admin/views/AdminUsers.vue'
import AdminUserProfile from '@/modules/Admin/views/AdminUserProfile.vue'
import AdminSupportRequests from '@/modules/Admin/views/AdminSupportRequests.vue'
import AdminContent from '@/modules/Admin/views/AdminContent.vue'


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
      layout: 'ProfileLayout'
    }
  },
  {
    path: '/profilesettings',
    name: 'ProfileSettings',
    component: ProfileSettingsView,
    meta: {
      layout: 'ProfileLayout'
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
  {
    path: '/carsharingstatus',
    name: 'AdminCarsharingStatus',
    component: AdminCarsharingStatus,
    meta: {
      layout: 'AdminLayout'
    }
  },
  {
    path: '/carsharinginfo/:id',
    name: 'AdminCarsharingInfo',
    component: AdminCarsharingInfo,
    meta: {
      layout: 'AdminLayout'
    }
  },
  {
    path: '/statistics',
    name: 'AdminStatistics',
    component: AdminStatistics,
    meta: {
      layout: 'AdminLayout'
    }
  },
  {
    path: '/users',
    name: 'AdminUsers',
    component: AdminUsers,
    meta: {
      layout: 'AdminLayout'
    }
  },
  {
    path: '/users/:id',
    name: 'AdminUserProfile',
    component: AdminUserProfile,
    meta: {
      layout: 'AdminLayout'
    }
  },
  {
    path: '/supportrequests',
    name: 'AdminSupportRequests',
    component: AdminSupportRequests,
    meta: {
      layout: 'AdminLayout'
    }
  },
  {
    path: '/content',
    name: 'AdminContent',
    component: AdminContent,
    meta: {
      layout: 'AdminLayout'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
