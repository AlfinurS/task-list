<template>
  <div id="app">
    <PageComponent/>
  </div>
</template>


<script>
import PageComponent from './PageComponent.vue'

export default {
  name: 'App',
  components: {
    PageComponent,
  }
}
</script>


<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
