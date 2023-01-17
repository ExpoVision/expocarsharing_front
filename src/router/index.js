import { createRouter, createWebHistory } from 'vue-router'

import adminProfileRoutes from '@/modules/Admin/views/routes'
import landingModuleRoutes from '@/modules/Landing/views/routes'

const routes = [
  ...adminProfileRoutes,
  ...landingModuleRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
