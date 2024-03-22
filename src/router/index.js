import { createRouter, createWebHistory } from 'vue-router'
import ListComp from '../components/ListComp.vue'
import RefReactive from '../components/staccs/RefReactive.vue'
import Filter from '../components/staccs/Filter.vue'
import printThis from '../components/staccs/printThis.vue'
import Pending from '../components/staccs/Pending.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/list',
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
      path: '/printThis',
      name: 'printThis',
      component: printThis
    },
    {
      path: '/pending',
      name: 'pending',
      component: Pending
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.path !== '/list'){
    if(to.path == '/'){
      next('/list')
    }else{
      next()
    }
  }else{
    next()
  }
})


export default router
