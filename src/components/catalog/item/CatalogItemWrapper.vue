<template>
    <div class="sv-cat-item__wrapper">
        <Item :item-data="$props.itemData" />
    </div>
</template>

<script>
import Item from './CatalogItem'

export default {
    name: 'CatalogItemWrapper',

    components: {
        Item
    },
    props: {
        itemData: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>