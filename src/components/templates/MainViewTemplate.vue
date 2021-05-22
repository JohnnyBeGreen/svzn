<template>
    <section class="sv-template sv-center">
        <section v-if="$attrs.title" class="sv-template__title">
            <span>{{ $attrs.title }}</span>
            <span v-if="$attrs.titleLinkName" @click="$router.push($attrs.titleLink)">{{ $attrs.titleLinkName }}</span>
        </section>

        <section class="sv-template__content" v-if="$slots['content']">
            <slot name="content"></slot>
        </section>
    </section>
</template>

<script>
export default {
    name: 'MainViewTemplate',

    inheritAttrs: false
}
</script>