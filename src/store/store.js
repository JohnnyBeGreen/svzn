import Vue from 'vue'
import Vuex from 'vuex'

import storePlugins from '@/plugins/storePlugins';

import fetchData from './modules/data/data'
import orders from './modules/orders/orders'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [storePlugins],
    modules: {
        fetchData,
        orders
    }
})
