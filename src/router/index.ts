import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Divination from '../views/Divination.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/divination'
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/divination',
      component: Divination
    }
  ]
})

export default router
