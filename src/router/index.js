import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import middlewarePipeline from './middlewarePipeline'

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

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
      return next()
  }
  const middleware = to.meta.middleware
  const context = {
      to,
      from,
      next,
      store
  }
  return middleware[0]({
      ...context,
      next: middlewarePipeline(context, middleware, 1)
  })
})


export default router
