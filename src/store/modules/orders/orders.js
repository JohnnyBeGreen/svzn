const state = {
    CURRENT_ORDER: {
        id: null,
        status: 0,
        items: [],
        personalData: null,
        paymentType: null
    },
    SESSION_ORDERS: [],
    ORDER_STEPS: 1
}

const getters = {
    CURRENT_ORDER_COUNT(state) {
        return state.CURRENT_ORDER.items.length
    }
}

const mutations = {
    ADD_ITEM(state, item) {
        return state.CURRENT_ORDER.items.push({item: item, quantity: 1})
    },
    SET_ITEM_QUANTITY(state, payload) {
        return state.CURRENT_ORDER.items[payload.index].quantity = payload.quantity
    },
    REMOVE_ITEM_CURRENT_ORDER(state, itemIndex) {
        return state.CURRENT_ORDER.items.splice(itemIndex, 1)
    },
    CHANGE_ORDER_STEPS(state, num) {
        return state.ORDER_STEPS = num
    }
}

const actions = {
    ADD_ITEM({commit}, item) {
        commit('ADD_ITEM', item)
    },
    SET_ITEM_QUANTITY({commit}, payload) {
        commit('SET_ITEM_QUANTITY', payload)
    },
    REMOVE_ITEM_CURRENT_ORDER({commit}, itemIndex) {
        commit('REMOVE_ITEM_CURRENT_ORDER', itemIndex)
    },
    CHANGE_ORDER_STEPS({commit}, num) {
        commit('CHANGE_ORDER_STEPS', num)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}