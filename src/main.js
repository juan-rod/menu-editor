import './firebase'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueHtmlToPaper from 'vue-html-to-paper'
// const options = {
//   name: '_blank',
//   specs: [
//     'fullscreen=yes',
//     'titlebar=yes',
//     'scrollbars=yes'
//   ],
//   styles: [
//     // 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
//     'https://menu-editor-41e92.firebaseapp.com/css/app.c75b892b.css',
//     '../src/assets/print.css'
//   ]
// }
// Vue.use(VueHtmlToPaper, options);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
