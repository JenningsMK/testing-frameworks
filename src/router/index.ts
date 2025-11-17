import {
  createRouter,
  createWebHistory,
} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'joi' },
    },
    {
      name: 'joi',
      path: '/joi',
      component: () => import('@/views/joi.vue'),
    },
    {
      name: 'veeValidate',
      path: '/vee-validate',
      component: () => import('@/views/vee-validate.vue'),
    },
    {
      name: 'vest',
      path: '/vest',
      component: () => import('@/views/vest.vue'),
    },
    {
      name: 'yup',
      path: '/yup',
      component: () => import('@/views/yup.vue'),
    },
    {
      name: 'zod',
      path: '/zod',
      component: () => import('@/views/zod.vue'),
    },
    {
      name: 'regie',
      path: '/regie',
      component: () => import('@/views/regie.vue'),
    },
  ],
})

export default router
