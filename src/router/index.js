import { createRouter, createWebHistory } from 'vue-router'
import ListComp from '../components/ListComp.vue'
import RefReactive from '../components/RefReactive.vue'
import Filter from '../components/Filter.vue'
import Pending from '../components/Pending.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: ListComp
    },
    {
      path: '/RefReactive',
      name: 'RefReactive',
      component: RefReactive
    },
    {
      path: '/filter',
      name: 'filter',
      component: Filter
    },
    {
      path: '/pending',
      name: 'pending',
      component: Pending
    },
  ]
})

// router beforeEach

export default router
