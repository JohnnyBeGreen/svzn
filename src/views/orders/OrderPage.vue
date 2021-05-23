<template>
    <page-template class="sv-container_l">
        <div class="sv-order" slot="content">
            <div class="sv-order__block">
                <OrderList v-if="ORDER_STEPS === 1"/>
                <order-summary v-else :title="step_1_title" :step="ORDER_STEPS !== 1 ? 1 : null">
                    <OrderSummaryItemsList />
                </order-summary>
            </div>

            <div class="sv-order__block">
                <order-summary :title="step_2_title" :step="ORDER_STEPS !== 2 && CURRENT_ORDER.personalData ? 2 : null">
                    <OrderSummaryForm v-if="ORDER_STEPS !== 2 && CURRENT_ORDER.personalData"/>
                </order-summary>
                <OrderForm v-if="ORDER_STEPS === 2" />
            </div>

            <div class="sv-order__block">
                <order-summary :title="step_3_title" :step="ORDER_STEPS !== 3 && ORDER_STEPS !== 2 && CURRENT_ORDER.personalData ? 3 : null"></order-summary>
                <OrderPayment v-if="ORDER_STEPS === 3" />
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
import OrderPayment from '@/components/orders/order/OrderPayment'

export default {
    name: 'OrderView',

    components: {
        PageTemplate,
        OrderList,
        OrderSummary,
        OrderSummaryItemsList,
        OrderForm,
        OrderSummaryForm,
        OrderPayment
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
    },
    watch: {
        CURRENT_ORDER: {
            handler() {
                localStorage.setItem('current_order', JSON.stringify(this.CURRENT_ORDER))
            },
            deep: true
        }
    }
} 
</script>