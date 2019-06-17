<template>
    <section class="background-register">
        <v-container>
            <v-layout column align-center>
                <v-flex xs12 sm6>
                    <v-card class="azer">
                        <v-card-title primary-title class="add-column-cart">
                            <h2 class="mb-3">Connexion</h2>
                            <v-flex class="pb-0 input-resize px-3" xs12 md4>
                                <v-text-field
                                    solo
                                    v-model="email"
                                    type="email" 
                                    name="Email"
                                    placeholder="Email"
                                    required
                                ></v-text-field>
                            </v-flex>

                            <v-flex class="pb-0 input-resize px-3" xs12 md4>
                                <v-text-field
                                    solo
                                    v-model="password"
                                    type="password" 
                                    name="Mot de passe"
                                    placeholder="Mot de passe"
                                    required
                                ></v-text-field>
                            </v-flex>
                        </v-card-title>

                        <v-card-actions class="add-column-cart">
                            <div class="error--text mb-3"/>
                            <router-link to="register" depressed class="mb-3 mx-5 accent black--text">Vous avez déjà un compte ? Connectez vous !</router-link>
                            <v-btn depressed @click="login" large class="mb-3" color="primary">Connexion</v-btn>
                            <router-link to="home" depressed class="mb-3 mx-5 accent black--text">Retour</router-link>                        
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        
    </section>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
    data () {
        return{
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        async login() {
            try{
                const response = await AuthenticationService.login({
                    email: this.email,
                    password: this.password
                })
            this.$store.dispatch('setToken', response.data.token)
            this.$store.dispatch('setUser', response.data.user)
            this.$router.push({
                name: 'home'
            })
            } catch (error) {
                this.error = error.response.data.error
            }
        }
    },
}
</script>


<style scoped>
    .add-column-cart{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .add-column-cart a {
        text-decoration: none;
    }
    .input-resize{
        min-width: 100%;
    }
    .background-register{
        height: 100vh;
        background: url('../../assets/img/bg-register-login.png');
        display: flex;
        align-items: center;
    }
</style>