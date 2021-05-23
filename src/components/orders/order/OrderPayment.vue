<template>
    <div class="sv-order__payment">
        <section class="sv-order__payment__items">
            <div 
                class="sv-order__payment__item" 
                :class="{'sv-order__payment__item_active': paymentType === item.index}"
                v-for="(item, index) in paymentTypes" :key="index"
            >
                <input 
                    type="radio" 
                    class="sv-form__radio" 
                    :class="{'sv-form__radio_active': paymentType === item.index}"
                    name="payment"
                    :value="item.index"
                    v-model="paymentType"
                >
                <span>{{ item.name }}</span>
            </div>
        </section>
        <section v-if="CURRENT_ORDER.items.length" class="sv-order__next">
            <div>
                <span v-if="!formValid">выберите тип оплаты</span>
                <div>
                    <span>Итого товаров {{totalQuantity}}</span>
                    <span>{{ totalPrice.toLocaleString('ru-RU') }} &#8381;</span>
                </div>
                <button 
                    @click="validateAndProceed()"
                    class="sv-button sv-button_style-1 sv-button_style-2">
                    {{ "подтвердить заказ".toUpperCase() }}
                </button>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { totalPriceCounter, totalQuantityCounter } from '@/mixins/total-counter'

export default {
    name: 'OrderPayment',

    mixins: [totalPriceCounter, totalQuantityCounter],
    data() {
        return {
            paymentType: null,
            totalPrice: 0,
            totalQuantity: 0,

            paymentTypes: [
                {name: 'Google Play', index: 1},
                {name: 'Онлайн-оплата банковскими картами', index: 2},
                {name: 'Оплата по QR-коду', index: 3},
                {name: 'VK Pay', index: 4},
                {name: 'Кредит онлайн', index: 5},
                {name: 'Оплата заказа в магазине картой или наличными', index: 6}
            ],

            formValid: true
        }
    },
    computed: {
        ...mapState('orders', [
            'CURRENT_ORDER'    
        ])
    },
    mounted() {
        this.paymentType = this.CURRENT_ORDER.paymentType ? this.CURRENT_ORDER.paymentType : null 
        this.totalPrice = this.totalPriceCounter(this.CURRENT_ORDER)
        this.totalQuantity = this.totalQuantityCounter(this.CURRENT_ORDER)
    },
    methods: {
        ...mapActions('orders', {
            addPaymentType: 'SET_ITEM_PAYMENT_TYPE',
            clearCurrentOrder: 'CLEAR_CURRENT_ORDER',
            nextStep: 'CHANGE_ORDER_STEPS'
        }),

        validate() {
            if (this.paymentType) {
                return true
            } else {
                this.formValid = false
                return false
            }
        },

        validateAndProceed() {
            if (this.validate()) {                
                console.log("Order details: ", this.CURRENT_ORDER)
                this.clearCurrentOrder()
                this.nextStep(1)
                this.$router.push('/catalog/hi-tech')
            }
        }
    },
    watch: {
        CURRENT_ORDER: {
            handler() {
                this.totalPrice = this.totalPriceCounter(this.CURRENT_ORDER)
                this.totalQuantity = this.totalQuantityCounter(this.CURRENT_ORDER)
            },
            deep: true
        },
        paymentType: {
            handler(val) {
                this.addPaymentType(val)
            }
        }
    }
}
</script>