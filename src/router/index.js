import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/home.vue')
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/favor',
      name: 'favor',
      component: () => import('@/views/favor/favor.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/views/order/order.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('@/views/message/message.vue')
    },
    {
      path: '/country',
      name: 'country',
      component: () => import('@/views/city/selectLocation.vue'),
      meta: {
        hide: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/search/search.vue'),
      meta: {
        hide: true
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/views/detail/detail.vue'),
      meta: {
        hide: true
      }
    }
  ]
})

export default router
