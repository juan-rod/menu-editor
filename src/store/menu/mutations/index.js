import { Mutation } from "../types";

export default {
  [Mutation.SET_NEW_MENU](state, payload) {
    state.newMenu = payload
  },
  [Mutation.SET_MENU_ITEMS](state, payload) {
    state.menuItems.push(payload)
  },
  [Mutation.SET_MENU_TYPE](state, type) {
    state.newMenu['menu_type'] = type
  },
  [Mutation.RESET_MENU_ITEMS](state) {
    state.menuItems = []
  },
  [Mutation.SET_ERROR](state, payload) {
    state.error = payload
  },
  [Mutation.CLEAR_ERROR](state) {
    state.error = ''
  }
}