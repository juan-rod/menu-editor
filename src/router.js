import Vue from 'vue'
import Router from 'vue-router'
import { Auth } from './firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      alias: '/menu',
      // route level code-splitting
      // this generates a separate chunk (home.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/user/Login.vue')
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   console.log('to', to)
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//       // if (store.getters.loggedIn) {
//       if (Auth.currentUser) {
//           next()
//           return
//       }
//       next('/login')
//   } else {
//       next()
//   }
// })
export default router
