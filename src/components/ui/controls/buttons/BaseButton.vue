<template>
    <button class="sv-button" @click="$emit('click')">{{ value }}</button>
</template>

<script>
export default {
    name: 'BaseButton',

    props: {
        value: {
            type: String
        },
        icon: {
            type: String
        }
    }
}
</script>