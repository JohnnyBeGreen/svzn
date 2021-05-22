import MainLayout from '@/layouts/main/MainLayout'

export default [
    {
        path: '/catalog',
        name: 'catalog',
        component: () => import(/* webpackChunkName: "catalog" */ '@/views/catalog/CatalogPage'),
        meta: {
          layout: MainLayout,
          requiresAuth: false
        }
    },
    {
        path: '/catalog/:category',
        name: 'catalog-category',
        component: () => import(/* webpackChunkName: "catalog-category" */ '@/views/catalog/ItemsListPage'),
        meta: {
          layout: MainLayout,
          requiresAuth: false
        }
    }
]