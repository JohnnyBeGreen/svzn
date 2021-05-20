<template>
  <div id="app">
    <components :is="layout"></components>
  </div>
</template>

<script>
import MainLayout from '@/components/layouts/main/MainLayout'

export default {
  name: "App",
  
  components: {
    MainLayout
  },

  data() {
    return {
      layout: MainLayout
    }
  }
};
</script>

<style lang="scss">
@import './assets/styles/main';
</style>
