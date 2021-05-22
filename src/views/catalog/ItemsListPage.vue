<template>
    <page-template class="sv-container_l" :title="pageTitle">
        <section class="sv-container sv-flex" slot="content">
            <template v-for="item in products">
                <CatalogItem :key="item.id" :item-data="item"/>
            </template>
        </section>
    </page-template>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import PageTemplate from '@/components/templates/MainViewTemplate'
import CatalogItem from '@/components/catalog/item/CatalogItemWrapper'

export default {
    name: 'ItemsListView',

    components: {
        PageTemplate,
        CatalogItem
    },
    data() {
        return {
            pageTitle: `Каталог товаров/${this.$route.params.category}`
        }
    },
    computed: {
        ...mapState('fetchData', {
            products: 'PRODUCTS'
        }),
    },
    mounted() {
        this.fetchProducts()
    },
    methods: {
        ...mapActions('fetchData', {
            fetchProducts: 'FETCH_PRODUCTS'
        }),
    }
}
</script>