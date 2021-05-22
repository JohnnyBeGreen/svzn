<template>
    <page-template class="sv-container_l">
        <div class="sv-order" slot="content">
            <accordion class="sv-accordion_style-1">
                <span slot="title">Состав заказа</span>
                <OrderList />
            </accordion>
            <accordion class="sv-accordion_style-1">
                <span slot="title">Контактная информация</span>
            </accordion>
            <accordion class="sv-accordion_style-1">
                <span slot="title">Способы оплаты</span>
            </accordion>
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