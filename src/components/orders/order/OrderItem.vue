<template>
    <div class="sv-order__item">
        <section>
            <section class="sv-order__item__content">
                <div class="sv-order__item__img">
                    <img :src="itemData.image" :alt="itemData.name">
                </div>
                <div class="sv-order__item__name">
                    <span class="sv-order__item-category sv-text_sm">{{ itemData.category.name }}</span>
                    <span class="sv-order__item-name">{{ itemData.full_name }}</span>
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
            <div @click="removeItem(itemIndex)" class="sv-order__item__delete"><span>Удалить</span></div>
        </section>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

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
            quantity: 1,
            price: this.itemData.offer.price
        }
    },
    methods: {
        ...mapActions('orders', {
            removeItem: 'REMOVE_ITEM_CURRENT_ORDER'
        })
    },
    watch: {
        quantity: {
            handler(val) {
                this.price = this.itemData.offer.price * val
                this.$emit('update:price', this.price)
            },
            immediate: true
        }
    }
}
</script>