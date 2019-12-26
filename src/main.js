// import './firebase'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import { FirebaseInit } from './firebase/app'
import store from '@/store/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // FirebaseInit,
  render: h => h(App)
}).$mount('#app')
