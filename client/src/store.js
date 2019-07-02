import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
import AuthenticationService from '@/services/AuthenticationService'
import FrontEndService from '@/services/FrontEndService'

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
/*   strict: true,
 */state: {
    token: null,
    user: null,
    items: null,
    isUserLoggedIn: false,
    cartProducts: [],
    currentProduct: {},
/*     showDrawer: false,
 */},

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
    },
    setItems (state, items) {
      state.items = items
    },
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product)
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1)
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product
    },
    /* SHOW_DRAWER: (state) => {
      state.showDrawer = !state.showDrawer;
    }, */
    
  },

  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setItems ({commit}, items) {
      commit('setItems', items)
    },
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product)
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index)
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product)
    },
    /* showOrHiddeDrawer: (context) => {
      context.commit('SHOW_POPUP_CART');
    }, */
  },

  getters: {
    getProducts: state => state.items,
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
/*     getDrawer: state => state.showDrawer,
 */},
})
