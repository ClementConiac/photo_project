import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/front/Home.vue'
import Product from './views/front/Product.vue'
import Shop from './views/front/Categories.vue'
import Team from './views/front/Team.vue'
import Account from './views/front/Account.vue'
import Cart from './views/front/Cart.vue'
import Modify from './views/front/Modify.vue'
import Administration from './views/back/Home-back.vue'
import Users from './views/back/Users-back.vue'
import Items from './views/back/Items-back.vue'
import Register from './views/front/Register.vue'
import Login from './views/front/Login.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/shop',
      name: 'shop',
      component : Shop,
      meta: {
        changeColor: true
      }
    },
    {
      path: '/team',
      name: 'team',
      component : Team
    },
    {
      path: '/register',
      name: 'register',
      component : Register,
      meta: {
        requiresHeader: true, 
        requiresFooter: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component : Login,
      meta: {
        requiresHeader: true, 
        requiresFooter: true
      }
    },
    {
      path: '/account',
      name: 'account',
      component : Account
    },
    {
      path: '/cart',
      name: 'cart',
      component : Cart
    },
    {
      path: '/modify',
      name: 'modify',
      component : Modify
    },
    {
      path: '/admin',
      name: 'admin',
      component : Administration,
      meta: { 
        requiresHeader: true,
        requiresFooter: true,
        admin : true
      }
    },
    {
      path: '/admin/users',
      name: 'admin-users',
      component : Users,
      meta: { 
        requiresHeader: true,
        requiresFooter: true,
        admin : true
      }
    },
    {
      path: '/admin/users/:userId',
      name: 'admin-users-id',
      component : Users,
      meta: { 
        requiresHeader: true,
        requiresFooter: true,
        admin : true
      }
    },
    {
      path: '/admin/items',
      name: 'admin-items',
      component : Items,
      meta: { 
        requiresHeader: true,
        requiresFooter: true,
        admin : true
      }
    },
    {
      path: '/admin/items/:itemId',
      name: 'admin-items-id',
      component : Items,
      meta: { 
        requiresHeader: true,
        requiresFooter: true,
        admin : true
      }
    },
    {
      path: '*',
      redirect: 'home'
    }
  ]
})
