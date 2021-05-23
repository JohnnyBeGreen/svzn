<template>
    <div class="sv-order__summary__items">
        <ul class="sv-order__summary__items-list">
            <li v-for="item in CURRENT_ORDER.items" :key="item.item.id" >
                <span>{{ item.item.name }}</span>
                <span>{{ item.quantity }} шт. &#215; {{ item.item.offer.price.toLocaleString('ru-RU') }} &#8381;</span>
            </li>
        </ul>
        <div class="sv-order__summary__items-total">
            <span>Итого товаров {{ totalQuantityCounter(CURRENT_ORDER) }}</span>
            <span>{{ totalPriceCounter(CURRENT_ORDER).toLocaleString('ru-RU') }} &#8381;</span>
        </div>
    </div>
</template>

<script>
import { totalPriceCounter, totalQuantityCounter } from '@/mixins/total-counter'
import { mapState } from 'vuex'

export default {
    name: 'OrderSummaryItemsList',
    
    mixins: [totalPriceCounter, totalQuantityCounter],
    computed: {
        ...mapState('orders', [
            'CURRENT_ORDER'
        ])
    }
}
</script>