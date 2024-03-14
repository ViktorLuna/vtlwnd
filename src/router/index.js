import { createRouter, createWebHistory } from 'vue-router'
import LoginComp from '../components/LoginComp.vue'
import AdminComp from '../components/AdminComp.vue'
import ClientComp from '../components/ClientComp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginComp
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminComp
    },
    {
      path: '/client',
      name: 'client',
      component: ClientComp
    },
  ]
})

// router beforeEach

export default router
