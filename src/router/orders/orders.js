import MainLayout from '@/components/layouts/main/MainLayout'

export default [
    {
        path: '/orders',
        name: 'orders',
        component: () => import(/* webpackChunkName: "orders" */ '@/views/orders/Orders'),
        meta: {
          layout: MainLayout,
          requiresAuth: false
        }
    },
    {
        path: '/orders/:order',
        name: 'order',
        component: () => import(/* webpackChunkName: "order" */ '@/views/orders/Order'),
        meta: {
          layout: MainLayout,
          requiresAuth: false
        }
    }
]