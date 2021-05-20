import MainLayout from '@/components/layouts/main/MainLayout'

export default [
    {
        path: '/catalog',
        name: 'catalog',
        component: () => import(/* webpackChunkName: "catalog" */ '@/views/catalog/Catalog'),
        meta: {
          layout: MainLayout,
          requiresAuth: false
        }
    },
    {
        path: '/catalog/:category',
        name: 'catalog-category',
        component: () => import(/* webpackChunkName: "catalog-category" */ '@/views/catalog/ItemsList'),
        meta: {
          layout: MainLayout,
          requiresAuth: false
        }
    }
]