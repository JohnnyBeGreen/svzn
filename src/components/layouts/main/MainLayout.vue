<template>
    <section>
        <app-header></app-header>
        
        <app-body>
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </app-body>

        <app-footer></app-footer>
    </section>
</template>

<script>
import AppHeader from './TheHeader'
import AppBody from './TheBody'
import AppFooter from './TheFooter'

export default {
    name: 'MainLayout',

    components: {
        AppHeader,
        AppBody,
        AppFooter
    }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s ease-in;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>