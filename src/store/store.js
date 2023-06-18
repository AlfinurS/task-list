import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';

Vue.use(Vuex);
Vue.config.productionTip = false;

export default new Vuex.Store({
  modules,
});
