<template>
    <div class="sv-order__list">
        <section v-if="CURRENT_ORDER.length" class="sv-order__list__items">
            <template v-for="(item, index) in CURRENT_ORDER">
                <OrderItem 
                    :key="item.id" 
                    :itemData="item" 
                    :itemIndex="index" 
                    @update:price="priceList.splice(index, 1, $event)"
                    @delete="priceList.splice(index, 1)"
                    />
            </template>
        </section>       

        <section class="sv-order__list_total">
            <span>Итого товаров {{CURRENT_ORDER.length}}</span>
            <span>{{ totalPrice.toLocaleString('ru-RU') }} &#8381;</span>
        </section>

        <section v-if="CURRENT_ORDER.length" class="sv-order__list_next">
            <div>
                <div>
                    <span>Итого к оплате</span>
                    <span>{{ totalPrice.toLocaleString('ru-RU') }} &#8381;</span>
                </div>
                <button 
                    class="sv-button sv-button_style-1 sv-button_style-2">
                    {{ "продолжить оформление".toUpperCase() }}
                </button>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import OrderItem from './OrderItem'

export default {
    name: 'OrderList',

    components: {
        OrderItem
    },
    data() {
        return {
            totalPrice: 0,
            priceList: []
        }
    },
    computed: {
        ...mapState('orders', ['CURRENT_ORDER'])
    },
    watch: {
        priceList: {
            handler(val) {
                if (val.length) this.totalPrice = val.reduce((a, b) => a + b)
                else this.totalPrice = 0
            }
        }
    }
}
</script>