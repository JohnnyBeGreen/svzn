const state = {
    CURRENT_ORDER: {
        items: [],
        totalPrice: null,
        personalData: null,
        paymentType: null
    },
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
    SET_ITEM_TOTAL_PRICE(state, totalPrice) {
        return state.CURRENT_ORDER.totalPrice = totalPrice
    },
    SET_ITEM_PERSONAL_DATA(state, personalData) {
        return state.CURRENT_ORDER.personalData = personalData
    },
    SET_ITEM_PAYMENT_TYPE(state, paymentType) {
        return state.CURRENT_ORDER.paymentType = paymentType
    },
    REMOVE_ITEM_CURRENT_ORDER(state, itemIndex) {
        return state.CURRENT_ORDER.items.splice(itemIndex, 1)
    },
    CHANGE_ORDER_STEPS(state, num) {
        return state.ORDER_STEPS = num
    },
    CLEAR_CURRENT_ORDER(state) {
        return state.CURRENT_ORDER = {
            items: [],
            totalPrice: null,
            personalData: null,
            paymentType: null
        }
    }
}

const actions = {
    ADD_ITEM({commit}, item) {
        commit('ADD_ITEM', item)
    },
    SET_ITEM_QUANTITY({commit}, payload) {
        commit('SET_ITEM_QUANTITY', payload)
    },
    SET_ITEM_TOTAL_PRICE({commit}, payload) {
        commit('SET_ITEM_TOTAL_PRICE', payload)
    },
    SET_ITEM_PERSONAL_DATA({commit}, personalData) {
        commit('SET_ITEM_PERSONAL_DATA', personalData)
    },
    SET_ITEM_PAYMENT_TYPE({commit}, paymentType) {
        commit('SET_ITEM_PAYMENT_TYPE', paymentType)
    },
    REMOVE_ITEM_CURRENT_ORDER({commit}, itemIndex) {
        commit('REMOVE_ITEM_CURRENT_ORDER', itemIndex)
    },
    CHANGE_ORDER_STEPS({commit}, num) {
        commit('CHANGE_ORDER_STEPS', num)
    },
    CLEAR_CURRENT_ORDER({commit}) {
        commit('CLEAR_CURRENT_ORDER')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}