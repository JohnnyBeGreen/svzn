<template>
    <page-template class="sv-container_l" :title="pageTitle"></page-template>
</template>

<script>
import PageTemplate from '@/components/templates/MainViewTemplate'

export default {
    name: 'CatalogView',

    components: {
        PageTemplate
    },

    data() {
        return {
            pageTitle: 'Каталог товаров'
        }
    }
}
</script>