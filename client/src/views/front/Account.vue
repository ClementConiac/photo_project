<template>
    <section>
        <v-tabs centered color="accent" dark icons-and-text shift>
            <v-tabs-slider color="secondary"></v-tabs-slider>

            <v-tab href="#tab-1">
                <span class="primary--text">Informations</span>
                <v-icon color="primary">account_box</v-icon>
            </v-tab>

            <v-tab href="#tab-2">
                <span class="primary--text">Commandes</span>
                <v-icon color="primary">archive</v-icon>
            </v-tab>

            <v-tab href="#tab-3">
                <span class="primary--text">Adresses</span>
                <v-icon color="primary">home</v-icon>
            </v-tab>

            <v-tab-item :value="'tab-' + 1">
                <v-container>
                    <v-layout justify-center>
                        <v-flex xs12 md6>
                            <v-card flat>
                                <p class="text-xs-center headline pt-3 mb-0">Mes informations</p>
                                <v-card-text>
                                    <v-form v-model="valid" class="mb-3">
                                        <v-container>
                                            <v-layout column>
                                                <v-flex class="pb-0" xs12 md4>
                                                    <v-text-field solo v-model="firstname" :rules="firstnameRules" label="Firstname" :placeholder="$store.state.user.firstname" required></v-text-field>
                                                </v-flex>

                                                <v-flex class="pb-0" xs12 md4>
                                                    <v-text-field solo v-model="lastname" :rules="nameRules" label="Lastname" :placeholder="$store.state.user.lastname" required></v-text-field>
                                                </v-flex>

                                                <v-flex class="pb-0" xs12 md4>
                                                    <v-text-field solo v-model="email" :rules="emailRules" label="E-mail" :placeholder="$store.state.user.email" required></v-text-field>
                                                </v-flex>

                                                <v-flex class="pb-0" xs12 md4>
                                                    <v-text-field solo v-model="pasword" :rules="paswordRules" label="Mot de passe" :placeholder="$store.state.user.password" required></v-text-field>
                                                </v-flex>
                                                <p class="text-xs-center">
                                                    <v-btn depressed large color="primary" class="btn-info">Modifier</v-btn>
                                                </p>
                                                
                                            </v-layout>
                                        </v-container>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-tab-item>

            <v-tab-item :value="'tab-' + 2">
                <v-container>
                    <v-layout justify-center>
                        <v-flex md4 xs12>
                            <v-card flat>
                                <v-card-text>
                                    <p class="text-xs-center headline">Mes commandes</p>
                                    <v-card>
                                        <v-layout row wrap>
                                            <v-flex xs12>
                                                <v-layout flat depressed>
                                                    <v-flex xs5 align-self-center>
                                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" height="125px" contain></v-img>
                                                    </v-flex>
                                                    <v-flex xs7>
                                                        <v-card-title primary-title class="pl-0">
                                                                <p class="title mb-0">Caméra électronique 3 types frontale</p>
                                                                <p class="my-0 my-2">Commander le 12/08/2016</p>
                                                                <v-btn flat class="primary ml-0 mb-0">Télécharger la facture</v-btn>
                                                        </v-card-title>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                        </v-layout>
                                    </v-card>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        
                    </v-layout>
                </v-container>
                
            </v-tab-item>

            <v-tab-item :value="'tab-' + 3">
                <v-container>
                    <v-layout justify-center>
                        <v-flex>
                            <v-card flat>
                                <v-card-text>
                                    <v-layout justify-center>
                                        <v-flex class="pt-0 text-xs-center">
                                            <p class="headline">Mes adresses</p>
                                            <v-btn depressed large color="primary">Ajouter une adresse</v-btn>
                                        </v-flex>
                                    </v-layout>
                                    
                                    <v-layout class="my-3">
                                        <v-flex xs12 sm6 offset-sm3>
                                            <v-card>
                                                <v-card-title>
                                                    <div>
                                                        <p class="mb-0 text-xs-center title mb-1">Clément Coniac</p>
                                                        <p class="mb-0 text-xs-center">22 Rue du Débarcadère,</p>
                                                        <p class="mb-0 text-xs-center">Paris, 75017, France</p>
                                                    </div>
                                                </v-card-title>
                                                <v-card-actions>
                                                    <v-btn depressed color="primary">Modifier</v-btn>
                                                    <v-btn depressed color="error">Supprimer</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-tab-item>

           
        </v-tabs>
    </section>
</template>

<script>
    export default {
    data: () => ({
        valid: false,
        lastname: '',
        nameRules: [
            v => !!v || 'Nom requis',
        ],
        firstname: '',
        firstnameRules: [
            v => !!v || 'Prénom requis',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail requis',
            v => /.+@.+/.test(v) || 'E-mail doit être valide'
        ],
        pasword: '',
        paswordRules: [
            v => !!v || 'Pasword requis',
            v => /.+@.+/.test(v) || 'E-mail doit être valide'
        ],
    }),

    computed: {
    },
    methods: {
    }
  }
</script>
<style scoped>
    
</style>
