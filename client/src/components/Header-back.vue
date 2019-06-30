<template>
    <section>
        <v-toolbar flat color="secondary" app>
            <v-toolbar-side-icon class="primary--text" @click="drawer = !drawer">    
            </v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">Photo</span>
                <span>Flex</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-menu offset-y>
                <v-btn flat slot="activator" color="primary">
                    <span>menu</span>
                    <v-icon right>expand_more</v-icon>
                </v-btn>
                <v-list>
                    <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>

            <v-btn flat color="primary" @click="logout">
                <span class="error--text">{{$store.state.user.firstname}}</span>
                <v-icon class="error--text" right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app class="primary">
            <v-layout>
                <v-flex>
                    <p class="accent--text text-xs-center title text-uppercase my-4">Administration</p>
                </v-flex>
            </v-layout>
            <v-list class="ml-5">
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="accent--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="accent--text">{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </section>
</template>

<script>
export default {
    data () {
        return {
            drawer: false,
            links: [
                { icon: 'dashboard', text: 'Home', route: '/admin' },
                { icon: 'folder', text: 'Items', route: '/admin/items' },
                { icon: 'account_circle', text: 'Users', route: '/admin/users' },
            ]
        }
    },
    methods: {
        logout () {
            window.location.replace('/home');
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
        }
    }
}
</script>

<style scoped>

</style>