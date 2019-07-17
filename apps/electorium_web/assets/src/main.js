import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './../node_modules/bulma/css/bulma.css'
import 'vue-flash-message/dist/vue-flash-message.min.css';
import VueFlashMessage from 'vue-flash-message';

Vue.use(VueFlashMessage);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

//new Vue({
//  router,
//  el: '#app',
//  template: '<App/>',
//  components: { App }
//})
