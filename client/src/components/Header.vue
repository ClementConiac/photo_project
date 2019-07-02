<template>
    <section>
        <v-toolbar app class="menu-shadow" flat color="black" height="75">
            <v-toolbar-side-icon class="hidden-md-and-up accent--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase">
                <router-link class="font-weight-light accent--text point-cursor" to="home">Photo<span class="accent--text font-weight-medium">Flex</span></router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items v-for="link in links" :key="link.text"  class="hidden-sm-and-down">
                <v-btn class="white--text point-cursor" flat :to="link.route">{{ link.text }}</v-btn>
            </v-toolbar-items>
            <div class="hidden-sm-and-down">
                <v-btn class="accent--text point-cursor" v-if="!$store.state.isUserLoggedIn" flat to="login">Connexion/Inscription</v-btn>
                <v-menu offset-y v-if="$store.state.isUserLoggedIn">
                    <v-btn flat slot="activator" color="accent">
                        <span>{{$store.state.user.firstname}}</span>
                        <v-icon right>expand_more</v-icon>
                    </v-btn>
                    <v-list>
                        <v-list-tile to="account">
                            <v-list-tile-title>Informations</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile to="account">
                            <v-list-tile-title>Commandes</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile to="account">
                            <v-list-tile-title>Adresses</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile v-if="$store.state.user.isAdmin" to="admin">
                            <v-list-tile-title class="orange--text">Administration</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile @click="logout">
                            <v-list-tile-title class="error--text">Déconnexion</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </div>
            <v-btn fab flat>
                <v-icon class="accent--text" @click="drawerCart = !drawerCart" right>shopping_cart</v-icon>
            </v-btn>
            <span class="accent--text" v-if="hasProduct()">
                {{ getProductsInCart.length }}
            </span>
        </v-toolbar>
        
    
        <v-navigation-drawer app v-model="drawer" disable-resize-watcher class="primary">
            <v-layout>
                <v-flex class="mt-5 log-mobile"> 
                    <v-icon class="ml-3" large>account_circle</v-icon>

                    <v-btn v-if="$store.state.isUserLoggedIn" to="account" flat color="grey">
                        <span class="accent--text">Compte {{$store.state.user.firstname}}</span>
                        <v-icon class="accent--text">keyboard_arrow_right</v-icon>
                    </v-btn>
                    
                    <div class="d-flex" v-if="!$store.state.isUserLoggedIn">
                        <v-btn to="login" class="ml-1 accent--text" flat>Connexion</v-btn>
                        <v-btn to="register" class="accent--text" flat>Inscription</v-btn>
                    </div>
                </v-flex>
            </v-layout>
            <v-expansion-panel class="liste-mobile">
                <v-expansion-panel-content v-for="item in items" :key="item.title" class="primary accent--text">
                <template v-slot:actions>
                    <v-icon color="accent">$vuetify.icons.expand</v-icon>
                </template>
                    <template v-slot:header>
                        <v-icon class="accent--text">{{ item.icon }}</v-icon>
                        <div>{{ item.title }}</div>
                    </template>
                    <v-card v-for="subItem in item.items" :key="subItem.title" router :to="subItem.route" class="sub-item-mobile">
                        <v-btn flat>{{ subItem.title }}</v-btn>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <div v-if="$store.state.isUserLoggedIn">
                <v-btn v-if="$store.state.user.isAdmin" flat class="orange--text" to="admin">
                    <span>Administration</span>
                </v-btn>
                <v-btn @click="logout" flat color="error">
                    <span>Déconnexion</span>
                </v-btn>
            </div>
        </v-navigation-drawer>

        <v-navigation-drawer v-model="drawerCart" right app class="primary" width="350px">
            <v-layout>
                <v-flex>
                    <p class="accent--text text-xs-center title text-uppercase my-4">Panier</p>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex class="cart-struct mb-4" v-for="(product, index) in getProductsInCart" :key="index">
                    <img :src="require(`./../assets/img/${product.image}`)" class="img-responsive" aspect-ratio="2">
                    <div class="cart-struct-info">
                        <p class="accent--text mb-0">{{ product.title }}</p>
                        <p class="accent--text mb-0">{{ product.price }},00€</p>
                        <v-btn class="mb-0 ml-0 error btn-delete-cart" small @click="remove(index)">remove</v-btn>
                    </div>
                    <div class="cart-struct-quantity">
                        <v-icon class="accent--text">keyboard_arrow_up</v-icon>
                        <p class="mb-0 accent--text">1</p>
                        <v-icon class="accent--text">keyboard_arrow_down</v-icon>
                    </div>
                </v-flex>
                <div v-if="!hasProduct()" class="cart-empty mt-5">
                    <h3 class="accent--text">Pas de produit dans le panier ... :(</h3>
                    <v-btn depressed large color="secondary primary--text" to="/shop" class="my-4 ml-0">Boutique</v-btn>
                </div>
                <div v-if="hasProduct()" class="cart-not-empty mt-5">
                    <h3 class="accent--text ">
                        Total: {{ totalPrice() }},00€
                    </h3>
                    <v-layout row wrap justify-center v-if="$store.state.isUserLoggedIn" >
                        <v-btn flat class="secondary primary--text point-cursor my-4" to="/cart" @click="drawerCart = !drawerCart">Payement</v-btn>
                    </v-layout>
                    <v-layout row wrap justify-center v-if="!$store.state.isUserLoggedIn">
                        <v-btn flat class="secondary primary--text point-cursor my-4" to="login">Connexion/Inscription</v-btn>
                    </v-layout>
                </div>
            </v-layout>
        </v-navigation-drawer>
    </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    
    data () {
        return {
        drawer: false,
        drawerCart: false,
        numberIncrement: 0,
        links: [
          {icon: '', text: 'Home',categories: 'test-cats', route: 'home'},
          {icon: '', text: 'Boutique',categories: 'test-cats', route: 'shop'},
          {icon: '', text: 'Équipe',categories: 'test-cats', route: 'team'},
          {icon: '', text: 'Contact',categories: 'test-cats', route: 'team#test'}
        ],
        items: [
          {
            action: 'local_activity',
            icon: 'dashboard',
            title: 'Home',
            items: [
              { title: 'Home', route: '/home'},
              
            ]
          },
          {
            action: 'local_activity',
            icon: 'dashboard',
            title: 'Boutiue',
            items: [
              { title: 'Categorie n°1', route: '/shop'},
            ]
          },
          {
            action: 'local_activity',
            icon: 'dashboard',
            title: 'Équipe',
            items: [
              { title: 'Équipe', route: '/team'},
            ]
          },
           {
            action: 'local_activity',
            icon: 'dashboard',
            title: 'Contact',
            items: [
              { title: 'Contact', route: '/team'},
            ]
          },
        ]
      }
    },
    computed: {
        ...mapGetters([
            'getProducts',
            'getProductsInCart',
        ])
    },
    methods: {
        ...mapActions([
            'setToken',
            'setUser',
            'addProduct',
            'currentProduct',
            'removeProduct',
        ]),
        logout () {
            this.$router.push({
                name: 'home'
            })
            this.setToken(null)
            this.setUser(null)
            this.$store.state.cartProducts = []
        },
        addProductToCart(product) {
            this.addProduct(product);
        },
        addCurrentProduct(product) {
            this.currentProduct(product);
        },
        hasProduct() {
            return this.getProductsInCart.length > 0;
        },
        totalPrice() {
            return this.getProductsInCart.reduce((current, next) =>
            current - next.price * -1, 0);
        },
        remove(index) {
            this.removeProduct(index);
        },


    },
    watch: {
      '$vuetify.breakpoint.mdAndUp': function () {
        // Hide navigation drawer on MD and UP screen size
        this.drawer = false;
      }
    }
}
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    .log-mobile{
        display: flex;
        border-bottom: solid 2px #262424 !important;
    }
    .log-mobile button, .log-mobile i{
        color: #FFFFFF;
    }
    .liste-mobile li{
        border-bottom: solid 2px #262424 !important;
    }
    .sub-item-mobile{
        background-color: #000000;
        border-top: solid 2px #262424 !important;
    }
    .sub-item-mobile button{
        color: #FFFFFF;
        margin-left: 118px;
    }
    .point-cursor{
        cursor: pointer;
    }
    .cart-struct{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly
    }
    .cart-struct-quantity{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    .cart-struct-info{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly
    }
    .cart-empty{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .cart-not-empty{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .img-responsive{
        width: 20%;
    }
</style>