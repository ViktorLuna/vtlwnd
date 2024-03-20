import { createRouter, createWebHistory } from 'vue-router'
import ListComp from '../components/ListComp.vue'
import FilterVue3 from '../components/Filter-Vuejs3.vue'
import ComputedVue3 from '../components/Computed-Vuejs3.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: ListComp
    },
    {
      path: '/filter',
      name: 'filter',
      component: FilterVue3
    },
    {
      path: '/computed',
      name: 'computed',
      component: ComputedVue3
    },
  ]
})

// router beforeEach

export default router
