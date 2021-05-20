import MainLayout from '@/components/layouts/main/MainLayout'

export default [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home'),
        meta: {
          layout: MainLayout,
          requiresAuth: false
        }
    }
]