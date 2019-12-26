import { menusCollection } from '@/firebase'
import { Action, Mutation } from '../types'

function getMenuItems (commit, doc) {
  menusCollection.doc(doc.id).collection('menu_items')
    .get()
    .then((snapshot) => {
      snapshot.forEach((data) => {
        console.log('data.data()', data.data())
        commit(`${[Mutation.SET_MENU_ITEMS]}`, data.data())
      })
    })
}

export default {
  async [Action.CREATE_NEW_MENU] ({commit, dispatch, getters}) {
    let newMenu = await menusCollection.doc()
    commit(`${[Mutation.SET_NEW_MENU]}`, { id: newMenu.id })
    dispatch(`${Action.GET_MENU_ITEMS}`, getters.menuType)
  },
  async [Action.GET_MENU_ITEMS] ({commit}, menuType) {
    menusCollection.where("menu_type", "==", menuType)
      .get()
      .then((querySnapshot) => {
        // commit(`${[Mutation.RESET_MENU_ITEMS]}`)
        querySnapshot.forEach((doc) => getMenuItems(commit, doc))
      })
      .catch((error) => console.log("Error getting documents: ", error))
  },
}