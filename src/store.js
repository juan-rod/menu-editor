import Vue from 'vue'
import Vuex from 'vuex'
import { menuCollection } from './firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuItems: [],
    errors: ''
  },
  mutations: {
    setMenu: (state, menuItem) => {
      state.menuItem = menuItem
    }
  },
  actions: {
    setMenu: async context => {
      let snapshot = await menuCollection.orderBy('createdAt').get();
      const menuItems = []
      snapshot.forEach(doc => {
        let appData = doc.data()
        appData.id = doc.id
        menuItems.push(appData)
      })
      context.commit('setMenu', menuItems)
    }
  }
})
