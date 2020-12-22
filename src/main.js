import Vue from 'vue'
import App from './app/app.vue'
import router from './router'
import store from './store'



//import bootstrap
import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue);

//api communication
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//main style sheet
import './theme/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
