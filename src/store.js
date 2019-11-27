import Vue from 'vue'
import Vuex from 'vuex'
import { menuCollection, Auth } from '@/firebase'
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
  // plugins: [vuexStorage.plugin],
  state: {
    menuItems: [],
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
    login(state, userData) {
      // console.log('mutations login state, userData', state, userData)
      // state.token = userData.token
      // state.userId = userData.userId
      // state.expirationDate = userData.expirationDate
      // state.user = userData.user
    },
    logout(state){
      // console.log('mutations LOGOUT state', state)
      // state.token = ''
      // state.userId = ''
      // state.expirationDate = ''
      // state.user = ''
    },
    setUser: (state, user) => {
      // console.log('SETUSER user', user)
      state.user = user
    },
    setMenu: (state, menuItems) => {
      state.menuItems = menuItems
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
      console.log('setErrors', errors)
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
    }
  },
  getters: {
    /* Partially Implemented not for production use */
    loggedIn: state => !!state.token,
    user (state) {
      return state.user
    }
  }
})
