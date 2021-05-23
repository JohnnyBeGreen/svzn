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
                <order-summary :title="step_2_title" :step="2">
                    <OrderSummaryForm v-if="ORDER_STEPS !== 2 && CURRENT_ORDER.personalData"/>
                </order-summary>
                <OrderForm v-if="ORDER_STEPS === 2" />
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
import OrderForm from '@/components/orders/order/OrderForm'
import OrderSummaryForm from '@/components/orders/order/OrderSummaryForm'

export default {
    name: 'OrderView',

    components: {
        PageTemplate,
        OrderList,
        OrderSummary,
        OrderSummaryItemsList,
        OrderForm,
        OrderSummaryForm
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