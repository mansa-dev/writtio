import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import WrittioUser from '../features/user/user.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'user/billing',
    component: Home
  }, {
    path: '/user',
    component: WrittioUser,
    children: [{
      path: 'billing',
      component: () => import('../features/user/billing/billing.vue')
    }, {
      path: 'plan',
      component: () => import('../features/user/plan/plan.vue')
    }, {
      path: 'settings',
      component: () => import('../features/user/settings/settings.vue')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
