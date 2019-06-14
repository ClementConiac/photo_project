import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#000000',
    secondary: '#F8D100',
    accent: '#FFFFFF',
    error: '#E52621',
  },
})
