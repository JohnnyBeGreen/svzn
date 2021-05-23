<template>
    <page-template class="sv-container_l" :title="pageTitle">
        <p @click="$router.push('/catalog/hi-tech')" class="sv-text-l" style="cursor: pointer" slot="content"><u>Раздел HiTech ></u></p>
    </page-template>
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