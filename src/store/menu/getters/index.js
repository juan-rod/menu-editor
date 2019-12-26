export default {
  menuId: state => state.newMenu.id,
  menuType: state => !state.newMenu.menu_type ? 'brunch' : state.newMenu.menu_type
}