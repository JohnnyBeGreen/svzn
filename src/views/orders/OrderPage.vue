<template>
    <page-template class="sv-container_l">
        <div class="sv-order" slot="content">
            <div class="sv-order__block">
                <OrderList />
            </div>

            <div class="sv-order__block">
                <span slot="title">Контактная информация</span>
            </div>

            <div class="sv-order__block">
                <span slot="title">Способы оплаты</span>
            </div>
        </div>
    </page-template>
</template>

<script>
import PageTemplate from '@/components/templates/MainViewTemplate'
import Accordion from '@/components/ui/accordion/BaseAccordion'
import OrderList from '@/components/orders/order/OrderList'

export default {
    name: 'OrderView',

    components: {
        PageTemplate,
        Accordion,
        OrderList
    },
    data() {
        return {
            pageTitle: 'Заказ №'
        }
    }
} 
</script>