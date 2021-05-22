import MainLayout from '@/layouts/main/MainLayout'

export default [
    {
        path: '/orders',
        name: 'orders',
        component: () => import(/* webpackChunkName: "orders" */ '@/views/orders/OrdersPage'),
        meta: {
          layout: MainLayout,
          requiresAuth: false
        },
        children: [
          {
              path: ':order',
              name: 'order',
              component: () => import(/* webpackChunkName: "order" */ '@/views/orders/OrderPage'),
              meta: {
                layout: MainLayout,
                requiresAuth: false
              }
          }
        ]
    }
]