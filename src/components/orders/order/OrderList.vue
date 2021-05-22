<template>
    <div class="sv-order__list">
        <template v-for="(item, index) in CURRENT_ORDER">
            <OrderItem :key="item.id" :itemData="item" :itemIndex="index" @update:price="totalPrice = totalPrice + $event"/>
        </template>
        <div class="sv-order__list_total">
            <span>Итого товаров {{CURRENT_ORDER.length}}</span>
            <span>{{ totalPrice.toLocaleString('ru-RU') }} &#8381;</span>
        </div>

        <div class="sv-order__list_next">
            дальше
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import OrderItem from './OrderItem'

export default {
    name: 'OrderList',

    components: {
        OrderItem
    },
    data() {
        return {
            totalPrice: 0
        }
    },
    computed: {
        ...mapState('orders', ['CURRENT_ORDER'])
    }
}
</script>