<template>
    <div class="sv-order__summary">
        <section class="sv-order__summary__title">
            <span>{{ $attrs.title }}</span>
            <div @click="editStep($attrs.step)" class="sv-order__summary__edit">
                <font-awesome-icon icon="pencil-alt" />
                <span>Изменить</span>
            </div>
        </section>
        <section v-if="$slots['default']" class="sv-order__summary__content">
            <slot></slot>
        </section>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'OrderListSummary',

    inheritAttrs: false,

    methods: {
        ...mapActions('orders', {
            editStep: 'CHANGE_ORDER_STEPS'
        })
    }
}
</script>