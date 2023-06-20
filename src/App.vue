<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
  HeaderComponent,
  }
}
</script>


<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
