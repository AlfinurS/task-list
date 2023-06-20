import Vue from 'vue'
import App from './App.vue'
import store from './store/store';
import router from './router';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use({ store });

Vue.config.productionTip = false


new Vue({
  el:'#app',
  render : h => h(App),
  router,
  store
})
