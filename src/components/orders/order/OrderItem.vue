<template>
    <div class="sv-order__item">
        <section>
            <section class="sv-order__item__content">
                <div class="sv-order__item__img">
                    <img :src="itemData.item.image" :alt="itemData.item.name">
                </div>
                <div class="sv-order__item__name">
                    <span class="sv-order__item-category sv-text_sm">{{ itemData.item.category.name }}</span>
                    <span class="sv-order__item-name">{{ itemData.item.full_name }}</span>
                </div>
            </section>
            
            <section class="sv-order__item__counter">
                <button @click="quantity > 1 ? quantity-- : false"><font-awesome-icon icon="minus" /></button>
                <input type="text" v-model="quantity">
                <button @click="quantity++"><font-awesome-icon icon="plus" /></button>
            </section>

            <section>
                <div class="sv-order__item__price">
                    <span>{{ price.toLocaleString('ru-RU') }} &#8381;</span>
                </div>
            </section>
        </section>

        <section>
            <div  
                class="sv-order__item__delete">
                <span @click.stop="deleteItem(itemIndex)">Удалить</span>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'OrderItem',

    props: {
        itemData: {
            type: Object,
            default: () => ({})
        },
        itemIndex: {
            type: [Number, String]
        }
    },
    data() {
        return {
            quantity: 0,
            price: this.itemData.item.offer.price
        }
    },
    computed: {
        ...mapState('orders', [
            'CURRENT_ORDER'
        ])
    },
    created() {
        if (this.CURRENT_ORDER.items[this.itemIndex].quantity) {
            this.quantity = this.CURRENT_ORDER.items[this.itemIndex].quantity
        } else this.quantity = 1
    },
    methods: {
        ...mapActions('orders', {
            removeItem: 'REMOVE_ITEM_CURRENT_ORDER',
            setItemQuantity: 'SET_ITEM_QUANTITY',
            clearCurrentOrder: 'CLEAR_CURRENT_ORDER'
        }),
        deleteItem(index) {
            if (this.CURRENT_ORDER.items.length > 1) {
                this.removeItem(index)
            } else {
                this.clearCurrentOrder()
                this.$router.push('/catalog/hi-tech')
            }
        }
    },
    watch: {
        quantity: {
            handler(val) {
                this.setItemQuantity({index: this.itemIndex, quantity: val})
                this.price = this.itemData.item.offer.price * this.CURRENT_ORDER.items[this.itemIndex].quantity
            }
        }
    }
}
</script>