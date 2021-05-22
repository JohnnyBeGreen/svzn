const state = {
    CURRENT_ORDER: [],
    SESSION_ORDERS: []
}

const getters = {
    CURRENT_ORDER_COUNT(state) {
        return state.CURRENT_ORDER.length
    }
}

const mutations = {
    ADD_ITEM(state, itemId) {
        return state.CURRENT_ORDER.push(itemId)
    }
}

const actions = {
    ADD_ITEM({commit}, itemId) {
        commit('ADD_ITEM', itemId)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}