<template>
    <section class="sv-accordion">
        <button class="sv-accordion__trigger" @click="showHide()">
            <slot name="title"></slot>
        </button>
        <section ref="content" class="sv-accordion__content">
            <div class="sv-accordion__content__inner">
                <slot></slot>
            </div>
        </section>
    </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'BaseAccrodion',

    data() {
        return {
            isHidden: true
        }
    },
    computed: {
        ...mapState('orders', ['CURRENT_ORDER']),
        orderLength() {return this.CURRENT_ORDER.length}
    },
    methods: {
        showHide() {                
            if (this.isHidden) {
                this.$refs['content'].style.height = this.$refs['content'].scrollHeight + 'px'
                this.isHidden = false
            } else {
                this.$refs['content'].style.height = null
                this.isHidden = true
            }
        }
    },
    watch: {
        orderLength: {
            handler() {
                console.log('test', this.$refs['content'].scrollHeight)
            }
        }
    }
}
</script>