const state = {
    PRODUCTS: [],
    PAYMENTS: []
}

const mutations = {
    ADD_PRODUCTS(state, products) {
        return state.PRODUCTS = [...products]
    },
    ADD_PAYMENTS(state, payments) {
        return state.PAYMENTS = [...payments]
    }
}

const actions = {
    async FETCH_PRODUCTS({ commit }) {
        const products = await this.$api.products.fetch()
        commit('ADD_PRODUCTS', products)
    },
    async FETCH_PAYMENTS({ commit }) {
        const payments = await this.$api.payments.fetch()
        commit('ADD_PAYMENTS', payments)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}