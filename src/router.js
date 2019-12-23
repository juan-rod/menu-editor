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
      },
      children: [
        {
          path: '/new-menu/:id'
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/user/Login.vue')
    },
    {
      path: '/wp/dinner',
      component: () => import(/* webpackChunkName: "login" */ './wordpress-views/dinner.vue')
    },
    {
      path: '/wp/brunch',
      component: () => import(/* webpackChunkName: "login" */ './wordpress-views/brunch.vue')
    },
    {
      path: '/wp/hh',
      component: () => import(/* webpackChunkName: "login" */ './wordpress-views/hh.vue')
    },
    {
      path: '/wp/cocktails',
      component: () => import(/* webpackChunkName: "login" */ './wordpress-views/cocktails.vue')
    },
    {
      path: '/wp/hotstuff',
      component: () => import(/* webpackChunkName: "login" */ './wordpress-views/hotstuff.vue')
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      // if (store.getters.loggedIn) {
      if (Auth.currentUser) {
          next()
          return
      }
      next('/login')
  } else {
      next()
  }
})
export default router
