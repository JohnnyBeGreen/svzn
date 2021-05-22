<template>
    <header class="app-header sv-primary-bg-clr--100">
        <div class="app-header__block">
            <img src="https://cdn.svyaznoy.ru/upload/web/svyaznoy/img/nav/logotype-white.svg">
        </div>
        <div class="app-header__block"></div>
        <div class="app-header__block"><Cart /></div>
    </header>
</template>

<script>
import Cart from '@/components/orders/cart/BaseCart'

export default {
    name: 'MainLayoutHeader',

    components: {
        Cart
    }
}
</script>