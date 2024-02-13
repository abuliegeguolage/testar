import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PsyTest from '../views/PsyTest.vue';
import DivinationList from '../views/divination/List.vue';
import DivinationPage from '../views/divination/[id].vue';

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
      path: '/psy-test',
      component: PsyTest
    },
    {
      path: '/divination/list',
      component: DivinationList
    },
    {
      path: '/divination/:id',
      component: DivinationPage
    }
  ]
})

export default router
