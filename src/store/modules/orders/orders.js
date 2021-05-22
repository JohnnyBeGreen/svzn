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
    },
    REMOVE_ITEM_CURRENT_ORDER(state, itemIndex) {
        return state.CURRENT_ORDER.splice(itemIndex, 1)
    }
}

const actions = {
    ADD_ITEM({commit}, itemId) {
        commit('ADD_ITEM', itemId)
    },
    REMOVE_ITEM_CURRENT_ORDER({commit}, itemIndex) {
        commit('REMOVE_ITEM_CURRENT_ORDER', itemIndex)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}