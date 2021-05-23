<template>
    <page-template class="sv-container_l">
        <div class="sv-order" slot="content">
            <div class="sv-order__block">
                <OrderList v-if="ORDER_STEPS === 1"/>
                <order-summary v-else :title="step_1_title" :step="1">
                    <OrderSummaryItemsList />
                </order-summary>
            </div>

            <div class="sv-order__block">
                <order-summary :title="step_2_title"></order-summary>
            </div>

            <div class="sv-order__block">
                <order-summary :title="step_3_title"></order-summary>
            </div>
        </div>
    </page-template>
</template>

<script>
import { mapState } from 'vuex'

import PageTemplate from '@/components/templates/MainViewTemplate'
import OrderList from '@/components/orders/order/OrderList'
import OrderSummary from '@/components/orders/order/OrderSummary'
import OrderSummaryItemsList from '@/components/orders/order/OrderSummaryItemsList'

export default {
    name: 'OrderView',

    components: {
        PageTemplate,
        OrderList,
        OrderSummary,
        OrderSummaryItemsList
    },
    data() {
        OrderSummary
        return {
            step_1_title: '1. Состав заказа',
            step_2_title: '2. Контактная информация',
            step_3_title: '3. Способы оплаты'
        }
    },
    computed: {
        ...mapState('orders', [
            'CURRENT_ORDER',
            'ORDER_STEPS'    
        ])
    }
} 
</script>