import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPageComponent from '../pages/MainPageComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPageComponent
  },
  {
    path: '/task',
    name: 'PageComponent',
    component: () => import('../pages/PageComponent.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
