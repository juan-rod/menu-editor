import Vue from 'vue'
import Vuex from 'vuex'
import { menuCollection, Auth, menusCollection } from '@/firebase'
// import VuexPersist from 'vuex-persist'
// import localForage from 'localforage'
import router from './router'
// import { Auth } from '@/firebase/auth';

Vue.use(Vuex)

// const vuexStorage = new VuexPersist({
//   key: 'sourcelink',
//   storage: localForage,  
//   // You can change this explicitly use 
//   // either window.localStorage  or window.sessionStorage
//   // However we are going to make use of localForage
// })

export default new Vuex.Store({
  state: {
    menuItems: [],
    menus: [],
    currentMenuId: null,
    errors: [],
    user: {
      userId: null,
      name: '',
      email: '',
      photoUrl: null,
      token: null,
      loggedIn: null,
    },
    loading: false
  },
  mutations: {
    setUser: (state, user) => {
      // console.log('SETUSER user', user)
      state.user = user
    },
    setMenu: (state, menuItems) => {
      state.menuItems = menuItems
    },
    setMenus: (state, menu) => {
      state.menus = menu
    },
    setLoading: (state, loading) => {
      state.loading = loading
    },
    setError: (state, errors) => {
      console.log('mutation setError', errors)
      state.errors = errors
    },
    clearError: (state) => {
      state.errors = []
    },
    setNewMenuId: (state, menuId) => {
      console.log('setNewMenuId menuId', menuId)
      state.currentMenuId = menuId
    }
  },
  actions: {
    loginUser({commit}, authData) {
      commit('setLoading', true)
      commit('clearError')
      Auth.signInWithEmailAndPassword(authData.email, authData.password)
        .then(data => {
          // console.log('data', data)
          commit('setLoading', true)
          const user = {
            userId: data.uid,
            name: data.displayName,
            email: data.email,
            photoUrl: data.photoURL,
            loggedIn: true,
            token: '123'
          }
          commit('setUser', user)
          router.push('/')
        })
        .catch(error => {
          console.log('error', error)
          commit('setLoading', false)
          commit('setError', error)
          // this.error = err.message;
        })
    },
    registerUser ( {commit}, userData) {
      commit('setLoading', true)
      commit('clearError')
      Auth.createUserWithEmailAndPassword(userData.email, userData.password)
        .then(
          data => {
            // console.log('registerUser data', data)
            commit('setLoading', false)
            const newUser = {
              userId: data.user.uid,
              name: data.user.displayName,
              email: data.user.email,
              photoUrl: data.user.photoURL,
              loggedIn: true,
              token: '123'
            }
            commit('setUser', newUser)
            router.push('/')
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    logout({commit}){
      Auth.signOut()
      commit('setUser', null)
    },
    setErrors ({commit}, error) {
      commit('setError', error)
    },
    setMenu: async context => {
      // console.log('setMenu, context', context)
      let snapshot = await menuCollection.orderBy('createdAt').get();
      // console.log('snapshot', snapshot)
      const menuItems = []
      snapshot.forEach(doc => {
        let appData = doc.data()
        appData.id = doc.id
        // console.log('appData', appData)
        menuItems.push(appData)
      })
      context.commit('setMenu', menuItems)
    },
    createNewMenu: async context => {
      let newMenu = await menusCollection.doc()
      console.log('newMenu', newMenu)
      context.commit('setNewMenuId', newMenu.id)
    }
  },
  getters: {
    /* Partially Implemented not for production use */
    loggedIn: state => !!state.token,
    user (state) {
      return state.user
    },
    currentMenuId: state => state.currentMenuId
  }
})
