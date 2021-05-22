<template>
    <section class="sv-tabs sv-tabs__container">
        <div class="sv-tabs__items">
            <template v-for="(item, index) in linksComputed">
                <router-link
                    class="sv-tabs__item"
                    :to="item.link"
                    :key="index"
                >{{item.name}}
                <div class="sv-tabs__counter"><span>1</span></div>
                </router-link>
            </template>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Tabs',

    props: {
        links: {
            type: Array,
            default: () => ([])
        }
    },
    computed: {
        linksComputed() {
            return this.links
        }
    }
}
</script>