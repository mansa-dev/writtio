import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import WrittioUser from '../features/user/user.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'billing',
    component: Home
  }, {
    path: '/billing',
    component: WrittioUser,
    children: [{
      path: '',
      component: () => import('../features/user/billing/billing.vue')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
