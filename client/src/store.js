import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, // modify only with actions or mutations
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    isAdmin : false,
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if(token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
      if(user.isAdmin == true) {
        state.isAdmin = true
        console.log('salut tu es admin')
      } else {
        state.isAdmin = false
        console.log('salut tu n\'es pas admin')
      }
    },
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
      /* console.log('slt:', user) */
      /* logique */
    }
  },
  getters: {
    isAdmin (state) {
      return state.isAdmin
    },
  }
})
