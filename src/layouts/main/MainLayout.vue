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
import AppHeader from './MainLayoutHeader'
import AppBody from './MainLayoutBody'
import AppFooter from './MainLayoutFooter'

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
.fade-enter-active {
  transition: opacity .25s ease-in;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>