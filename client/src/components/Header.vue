<template>
    <section>
            <v-toolbar app class="menu-shadow" flat color="black" height="75">
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
                            <span>UserName</span>
                            <v-icon right>expand_more</v-icon>
                        </v-btn>
                        <v-list>
                            <v-list-tile v-for="linkUser in linksUser" :key="linkUser.text" router :to="linkUser.route">
                                <v-list-tile-title>{{ linkUser.text }}</v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                </div>
                


                <v-btn fab flat>
                    <v-icon class="accent--text">shopping_cart</v-icon>
                </v-btn> 

                <v-toolbar-side-icon class="hidden-md-and-up accent--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            </v-toolbar>
        
    
        <v-navigation-drawer app v-model="drawer" disable-resize-watcher class="primary">
            <v-layout>
                <v-flex class="mt-5 log-mobile"> 
                    <v-icon class="ml-3" large>account_circle</v-icon>

                    <v-btn v-if="$store.state.isUserLoggedIn" to="account" flat color="grey">
                        <span class="accent--text">Compte Username</span>
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
            <v-btn v-if="$store.state.isUserLoggedIn" @click="logout" flat color="error">
                <span >Déconnexion</span>
            </v-btn>
        </v-navigation-drawer>
    </section>
</template>

<script>
export default {
    data () {
        return {
        drawer: false,
        links: [
          {icon: '', text: 'Home',categories: 'test-cats', route: 'home'},
          {icon: '', text: 'Boutique',categories: 'test-cats', route: 'shop'},
          {icon: '', text: 'Équipe',categories: 'test-cats', route: 'team'},
          {icon: '', text: 'Contact',categories: 'test-cats', route: 'team#test'}
        ],
        linksUser: [
          {icon: '', text: 'Informations', route: 'account'},
          {icon: '', text: 'Commandes', route: 'account'},
          {icon: '', text: 'Adresses', route: 'account'},
          {icon: '', text: 'Photos', route: 'account'},
          {icon: '', text: 'Déconnexion', route: 'account'}
        ],

        items: [
          {
            action: 'local_activity',
            icon: 'dashboard',
            title: 'Boutique',
            items: [
              { title: 'Casquette', route: '/boutique/categorie1'},
              { title: 'Sacoche', route: '/boutique/categorie1'},
            ]
          },
          {
            action: 'local_activity',
            icon: 'dashboard',
            title: 'Équipe',
            items: [
              { title: 'À propos', route: '/product'}
            ]
          },
          {
            action: 'local_activity',
            icon: 'dashboard',
            title: 'Contact',
            items: [
              { title: 'List Item', route: '/about3'},
              { title: 'dernier Item', route: '/about4'}
            ]
          },
        ]
      }
    },
    methods: {
        logout () {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
                name: 'home'
            })
        }
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
</style>