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
    currentMenu: null,
    currentMenuItems: [],
    currentMenuType: '',
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
    },
    setNewMenuId: (state, menuId) => {
      console.log('setNewMenuId menuId', menuId)
      state.currentMenuId = menuId
    },
    setNewMenuType: (state, menuType) => {
      console.log('setNewMenuType menuType', menuType)
      state.currentMenuType = menuType
    },
    setNewMenu: (state, menu) => {
      console.log('menu', menu)
      state.menus = [ menu ]
    },
    setCurrentMenu: (state, {menuData, menuId}) => {
      console.log('menuData, menuId', menuData, menuId)
      state.currentMenu = {...menuData, id: menuId }
    },
    getMenu: (state, menu) => {
      console.log('menu', menu)
      state.currentMenu = menu
    },
    setCurrentMenuItems: (state, item) => {
      state.currentMenuItems.push(item)
    },
    clearCurrentMenu: (state) => {
      state.currentMenu = null
      state.currentMenuItems = []
    }
  },
  actions: {
    loginUser({commit}, authData) {
      commit('setLoading', true)
      commit('clearError')
      Auth.signInWithEmailAndPassword(authData.email, authData.password)
        .then(data => {
          commit('setLoading', true)
          const user = {
            userId: data.user.uid,
            name: data.user.displayName,
            email: data.user.email,
            photoUrl: data.user.photoURL,
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
      let snapshot = await menuCollection.orderBy('createdAt').get();
      const menuItems = []
      snapshot.forEach(doc => {
        let appData = doc.data()
        appData.id = doc.id
        menuItems.push(appData)
      })
      context.commit('setMenu', menuItems)
    },
    createNewMenu: async context => {
      let newMenu = await menusCollection.doc()
      context.commit('setNewMenuId', newMenu.id)
      context.commit('setNewMenuType', 'brunch')
    },
    setNewMenu: async (context, menu) => {
      // Add a new document with a generated id.
      await menusCollection.add({
        createdBy: menu.createdBy,
        createdDate: menu.createdDate,
        menu_type: menu.menu_type,
        updatedDate: menu.updatedDate
      })
      .then(function(docRef) {
        let menuItems = menu.menu_items
        menuItems.forEach(item => {
          menusCollection.doc(docRef.id).collection('menu_items').add(item)
        })
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    },
    getMenu: async (context, menuType) => {
      menusCollection.where("menu_type", "==", menuType)
        .get()
        .then(function(querySnapshot) {
          // clear current menu
          context.commit('clearCurrentMenu')
          
          querySnapshot.forEach(function(doc) {
            console.log('getMenu: doc.id', doc.id)
            context.commit('setCurrentMenu', {menuData: doc.data(), menuId: doc.id})
            getMenuItems(context, doc)
          });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }
  },
  getters: {
    /* Partially Implemented not for production use */
    loggedIn: state => !!state.token,
    user (state) {
      return state.user
    },
    currentMenuId: state => state.currentMenuId,
    currentMenu: state => state.currentMenu,
    currentMenuType: state => state.currentMenuType
  }
})

function getMenuItems (context, doc) {
  menusCollection.doc(doc.id).collection('menu_items')
    .get()
    .then(function(snapshot) {
      snapshot.forEach(function(data) {
        context.commit('setCurrentMenuItems', data.data())
      })
    })
}