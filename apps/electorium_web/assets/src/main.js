import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import 'buefy/dist/buefy.css';
import 'vue-flash-message/dist/vue-flash-message.min.css';
import VueFlashMessage from 'vue-flash-message';

Vue.use(Buefy);
Vue.use(VueFlashMessage);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');

