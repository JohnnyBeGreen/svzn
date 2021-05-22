<template>
    <page-template class="sv-container_md" :title="pageTitle" :titleLinkName="titleLinkName" titleLink="/catalog/notebooks">
        <Tabs v-if="false" slot="content" :links="links" />
        <router-view slot="content"></router-view>
    </page-template>
</template>

<script>
import PageTemplate from '@/components/templates/MainViewTemplate'
import Tabs from '@/components/ui/tabs/BaseTabs'

export default {
    name: 'OrdersView',

    components: {
        PageTemplate,
        Tabs
    },
    data() {
        return {
            pageTitle: 'Оформление заказа',
            titleLinkName: 'Вернуться к покупкам',
            links: [
                {link: `/orders/cart`, name: "Корзина"},
                {link: `/orders/1`, name: "Заказ 1"},
                {link: `/orders/2`, name: "Заказ 2"},
            ]
        }
    }
}
</script>