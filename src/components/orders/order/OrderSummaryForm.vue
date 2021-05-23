<template>
    <div class="sv-order__summary__form">
        <ul class="sv-order__summary__form-list">
            <li><span>{{ CURRENT_ORDER.personalData.name }}</span></li>
            <li><span>{{ CURRENT_ORDER.personalData.phone }}</span></li>
            <li><span>{{ CURRENT_ORDER.personalData.email }}</span></li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'OrderSummaryForm',
    
    computed: {
        ...mapState('orders', [
            'CURRENT_ORDER'
        ])
    }
}
</script>