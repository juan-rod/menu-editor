// import { MenuCollection } from '../../firebase/db'
// export default {
//   state: {
//     menuItems: [],
//     menuErrors: [],
//   },
//   mutations: {
//     setMenu: (state, menuItems) => {
//       state.menuItems = menuItems
//     }
//   },
//   actions: {
//     setMenu: async context => {
//       let snapshot = await MenuCollection.orderBy('createdAt').get();
//       const menuItems = []
//       snapshot.forEach(doc => {
//         let appData = doc.data()
//         appData.id = doc.id
//         menuItems.push(appData)
//       })
//       context.commit('setMenu', menuItems)
//     }
//   },
//   getters: {}
// }