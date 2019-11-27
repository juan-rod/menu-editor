// import Auth from '../../firebase/auth'

// export default {
//   state: {
//     token: null,
//     userId: null,
//     user: null
//   },
//   mutations: {
//     setUser (state, payload) {
//       state.user = payload
//     }
//   },
//   actions: {
//     signUserUp ({commit}, payload) {
//       commit('setLoading', true)
//       commit('clearError')
//       Auth.createUserWithEmailAndPassword(payload.email, payload.password)
//         .then(
//           user => {
//             commit('setLoading', false)
//             const newUser = {
//               id: user.uid,
//               name: user.displayName,
//               email: user.email,
//               photoUrl: user.photoURL
//             }
//             commit('setUser', newUser)
//           }
//         )
//         .catch(
//           error => {
//             commit('setLoading', false)
//             commit('setError', error)
//             console.log(error)
//           }
//         )
//     },
//     signUserIn ({commit}, payload) {
//       commit('setLoading', true)
//       commit('clearError')
//       Auth.signInWithEmailAndPassword(payload.email, payload.password)
//         .then(
//           user => {
//             commit('setLoading', false)
//             const newUser = {
//               id: user.uid,
//               name: user.displayName,
//               email: user.email,
//               photoUrl: user.photoURL
//             }
//             commit('setUser', newUser)
//           }
//         )
//         .catch(
//           error => {
//             commit('setLoading', false)
//             commit('setError', error)
//             console.log(error)
//           }
//         )
//     },
//     signUserInGoogle ({commit}) {
//       commit('setLoading', true)
//       commit('clearError')
//       Auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
//         .then(
//           user => {
//             commit('setLoading', false)
//             const newUser = {
//               id: user.uid,
//               name: user.displayName,
//               email: user.email,
//               photoUrl: user.photoURL
//             }
//             commit('setUser', newUser)
//           }
//         )
//         .catch(
//           error => {
//             commit('setLoading', false)
//             commit('setError', error)
//             console.log(error)
//           }
//         )
//     },
//     autoSignIn ({commit}, payload) {
//       commit('setUser', {
//         id: payload.uid,
//         name: payload.displayName,
//         email: payload.email,
//         photoUrl: payload.photoURL
//       })
//     },
//     resetPasswordWithEmail ({ commit }, payload) {
//       const { email } = payload
//       commit('setLoading', true)
//       Auth.sendPasswordResetEmail(email)
//       .then(
//         () => {
//           commit('setLoading', false)
//           console.log('Email Sent')
//         }
//       )
//       .catch(
//         error => {
//           commit('setLoading', false)
//           commit('setError', error)
//           console.log(error)
//         }
//       )
//     },
//     logout ({commit}) {
//       Auth.signOut()
//       commit('setUser', null)
//     }
//   },
//   getters: {
//     user (state) {
//       return state.user
//     }
//   }
// }