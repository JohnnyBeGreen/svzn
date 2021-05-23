<template>
    <div class="sv-order__list">
        <section class="sv-order__list__items">
            <template v-for="(item, index) in CURRENT_ORDER.items">
                <OrderItem 
                    :key="item.id" 
                    :itemData="item" 
                    :itemIndex="index"
                    />
            </template>
        </section>       

        <section class="sv-order__list_total">
            <span>Итого товаров {{totalQuantity}}</span>
            <span>{{ totalPrice.toLocaleString('ru-RU') }} &#8381;</span>
        </section>

        <section class="sv-order__next">
            <div>
                <div>
                    <span>Итого к оплате</span>
                    <span>{{ totalPrice.toLocaleString('ru-RU') }} &#8381;</span>
                </div>
                <button
                    @click="nextStep(2)" 
                    class="sv-button sv-button_style-1 sv-button_style-2">
                    {{ "продолжить оформление".toUpperCase() }}
                </button>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { totalPriceCounter, totalQuantityCounter } from '@/mixins/total-counter'

import OrderItem from './OrderItem'

export default {
    name: 'OrderList',

    mixins: [totalPriceCounter, totalQuantityCounter],
    components: {
        OrderItem
    },
    data() {
        return {
            totalPrice: 0,
            totalQuantity: 0
        }
    },
    computed: {
        ...mapState('orders', [
            'CURRENT_ORDER'    
        ])
    },
    mounted() {
        this.totalPrice = this.totalPriceCounter(this.CURRENT_ORDER)
        this.totalQuantity = this.totalQuantityCounter(this.CURRENT_ORDER)
    },
    methods: {
        ...mapActions('orders', {
            nextStep: 'CHANGE_ORDER_STEPS',
            saveTotalPrice: 'SET_ITEM_TOTAL_PRICE'
        })
    },
    watch: {
        CURRENT_ORDER: {
            handler() {
                this.totalPrice = this.totalPriceCounter(this.CURRENT_ORDER)
                this.totalQuantity = this.totalQuantityCounter(this.CURRENT_ORDER)
            },
            deep: true
        },
        totalPrice: {
            handler(val) {
                this.saveTotalPrice(val)
            },
            immediate: true
        }
    }
}
</script>