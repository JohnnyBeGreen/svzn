import MainLayout from '@/layouts/main/MainLayout'

export default [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomePage'),
        meta: {
          layout: MainLayout,
          requiresAuth: false
        }
    }
]