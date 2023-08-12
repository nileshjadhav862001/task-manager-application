import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createPinia, PiniaVuePlugin } from 'pinia'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()
Vue.use(VueCompositionAPI)
// import vuetify from 'vuetify';
// import 'vuetify/dist/vuetify.min.css';

// Vue.use(vuetify);
Vue.config.productionTip = false

new Vue({
  pinia,

  // vuetify,
  render: h => h(App)
}).$mount('#app')
