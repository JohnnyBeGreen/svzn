<template>
    <div class="sv-cat__item">
        <div class="sv-cat__item-img">
            <img :src="itemData.image" :alt="itemData.name">
        </div>
        
        <section name="content-and-price">
            <div class="sv-cat__item-content">            
                <span class="sv-cat__item-category sv-text_sm">{{ itemData.category.name }}</span>

                <span class="sv-cat__item-name">{{ itemData.full_name }}</span>
            </div>
            
            <div class="sv-cat__item-price">
                <span>{{ itemData.offer.price.toLocaleString('ru-RU') }} &#8381;</span>
                <Button 
                    @click="checkAndProceed(itemData.id)" 
                    class="sv-button_style-1" 
                    :class="{'sv-button_style-1_active': itemAddedComputed}"
                    :value="itemAddedComputed ? 'добавлен' : 'в корзину'"/>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Button from '@/components/ui/controls/buttons/BaseButton'

export default {
    name: 'CatalogItem',

    components: {
        Button
    },
    props: {
        itemData: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            itemAdded: false
        }
    },
    computed: {
        itemAddedComputed() {
            return this.itemAdded
        },
        ...mapState('orders', ['CURRENT_ORDER'])
    },
    mounted() {
        if (this.CURRENT_ORDER.indexOf(this.itemData.id) !== -1) this.itemAdded = true
    },
    methods: {
        ...mapActions('orders', {
            addItemToCart: 'ADD_ITEM'
        }),

        checkAndProceed(id) {
           if (this.CURRENT_ORDER.indexOf(id) === -1) {
               this.addItemToCart(id)
               this.itemAdded = true
           } else {
               this.$router.push('/orders')
            }
        }
    }
}
</script>