<template>
    <section class="sv-container_md sv-center">
        <h4>{{ $route.params.category }}</h4>
            <section class="sv-container sv-flex">
            <template v-for="item in products">
                <CatalogItem :key="item.id" :item-data="item"/>
            </template>
        </section>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import CatalogItem from '@/components/catalog/item/CatalogItemWrapper'

export default {
    name: 'ItemsListView',

    components: {
        CatalogItem
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