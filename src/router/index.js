import { createRouter, createWebHistory } from 'vue-router'
import ListComp from '../components/ListComp.vue'
import ErrorPage from '../components/ErrorPage.vue'
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
      component: ListComp,
      meta: { title: 'List | Shuashua' },
    },
    {
      path: '/RefReactive',
      name: 'RefReactive',
      component: RefReactive,
      meta: { title: 'RefReactive Api | Shuashua' }
    },
    {
      path: '/filter',
      name: 'filter',
      component: Filter,
      meta: { title: 'Filter | Shuashua' }
    },
    {
      path: '/printThis',
      name: 'printThis',
      component: printThis,
      meta: { title: 'Print | Shuashua' }
    },
    {
      path: '/pending',
      name: 'pending',
      component: Pending,
      meta: { title: 'Pending | Shuashua' }
    },
    {
			path: '/:catchAll(.*)',
			name: 'error',
			component: ErrorPage,
			meta: { title: '404 | Shuashua' }
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
