import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

import "@/assets/styles/main.scss";
import 'swiper/css/swiper.css'


Vue.config.productionTip = false
Vue.use(VueAxios, axios,)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
