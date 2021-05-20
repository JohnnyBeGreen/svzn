import Vue from 'vue'
import Router from 'vue-router'

import Home from './home/home'
import Catalog from './catalog/catalog'
import Orders from './orders/orders'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [
        ...Home,
        ...Catalog,
        ...Orders
    ]
})

export default router