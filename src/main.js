import Vue from 'vue'
import App from './App.vue'
import store from './store/store';

Vue.use({ store });

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render : h => h(App),
  store,
})
