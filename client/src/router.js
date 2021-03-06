import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/front/Home.vue'
import Product from './views/front/Product.vue'
import Shop from './views/front/Categories.vue'
import Team from './views/front/Team.vue'
import Condition from './views/front/Condition.vue'
import Account from './views/front/Account.vue'
import Cart from './views/front/Cart.vue'
import Payemenet from './views/front/Payement.vue'
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
      component: Home,
      meta: {
        requiresFooterBis: true,
        requiresFooter: false
      }
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      meta: {
        requiresFooterBis: false,
        requiresFooter: true
      }
    },
    {
      path: '/shop',
      name: 'shop',
      component : Shop,
      meta: {
        requiresFooterBis: false,
        requiresFooter: true
      }
    },
    {
      path: '/team',
      name: 'team',
      component : Team,
      meta: {
        requiresFooterBis: false,
        requiresFooter: true
      }
    },
    {
      path: '/condition',
      name: 'condition',
      component : Condition,
      meta: {
        requiresFooterBis: false,
        requiresFooter: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component : Register,
      meta: {
        requiresHeader: true, 
        requiresFooter: true,
        requiresFooterBis: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component : Login,
      meta: {
        requiresHeader: true, 
        requiresFooter: true,
        requiresFooterBis: true,
      }
    },
    {
      path: '/account/:userId',
      name: 'account-id',
      component : Account,
      meta: {
        requiresFooterBis: false,
        requiresFooter: true,
        requiresAuth: true,
      }
    },
    {
      path: '/account/:userId/adress/:adressId',
      name: 'account-adress-id',
      component : Account,
      meta: {
        requiresFooterBis: false,
        requiresFooter: true,
        requiresAuth: true,
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component : Cart,
      meta: {
        requiresFooterBis: false,
        requiresFooter: true
      }
    },
    {
      path: '/payement',
      name: 'payement',
      component : Payemenet,
      meta: {
        requiresFooterBis: false,
        requiresFooter: true
      }
    },
    {
      path: '/modify',
      name: 'modify',
      component : Modify,
      meta: {
        requiresFooterBis: false,
        requiresFooter: true
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component : Administration,
      meta: { 
        requiresHeader: true,
        requiresFooter: true,
        requiresFooterBis: true,
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
        requiresFooterBis: true,
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
        requiresFooterBis: true,
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
        requiresFooterBis: true,
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
        requiresFooterBis: true,
        admin : true
      }
    },
    {
      path: '*',
      redirect: 'home'
    }
  ]
})
