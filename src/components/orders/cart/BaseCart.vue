<template>
    <div class="sv-cart">
        <font-awesome-icon icon="shopping-cart" />
        <div v-if="CURRENT_ORDER_COUNT" class="sv-cart__counter">
            <span>{{ CURRENT_ORDER_COUNT }}</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'BaseCart',

    computed: {
        ...mapGetters('orders', ['CURRENT_ORDER_COUNT'])
    }
}
</script>