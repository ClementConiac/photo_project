import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store'

Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
