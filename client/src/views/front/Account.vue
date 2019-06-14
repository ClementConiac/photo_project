<template>
    <section>
        <v-tabs
            centered
            color="accent"
            dark
            icons-and-text
            shift
        >
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

            <v-tab href="#tab-4">
                <span class="primary--text">Photos</span>
                <v-icon color="primary">image</v-icon>
            </v-tab>

            <v-tab-item :value="'tab-' + 1">
                <v-card flat>
                    <p class="text-xs-center headline pt-3 mb-0">Mes informations</p>
                    <v-card-text>
                        <v-form v-model="valid" class="mb-3">
                            <v-container>
                                <v-layout column>
                                    <v-flex class="pb-0" xs12 md4>
                                        <v-text-field            
                                            solo
                                            v-model="email"
                                            :rules="nameRules"
                                            label="Name"
                                            required
                                        ></v-text-field>
                                    </v-flex>

                                    <v-flex class="pb-0" xs12 md4>
                                        <v-text-field
                                            solo
                                            v-model="email"
                                            :rules="firstnameRules"
                                            label="Firstname"
                                            required
                                        ></v-text-field>
                                    </v-flex>

                                    <v-flex class="pb-0" xs12 md4>
                                        <v-text-field
                                            solo
                                            v-model="email"
                                            :rules="emailRules"
                                            label="E-mail"
                                            required
                                        ></v-text-field>
                                    </v-flex>

                                    <v-flex xs12 class="div-flex pt-0 mb-4" justify-center align-center="">
                                        <v-btn depressed large color="primary">Modifier</v-btn>
                                    </v-flex>
                                    <p class="text-xs-center headline pt-3">Sécurité</p>
                                    <v-flex class="pb-0" xs12 md4>
                                        <v-text-field
                                            solo
                                            v-model="pasword"
                                            :rules="paswordRules"
                                            label="Ancien mot de passe"
                                            required
                                        ></v-text-field>
                                    </v-flex>

                                    <v-flex class="pb-0" xs12 md4>
                                        <v-text-field
                                            solo
                                            v-model="pasword"
                                            :rules="paswordRules"
                                            label="Nouveau mot de passe"
                                            required
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex class="pb-0" xs12 md4>
                                        <v-text-field
                                            solo
                                            v-model="pasword"
                                            :rules="paswordRules"
                                            label="Confirmation du nouveau mot de passe"
                                            required
                                        ></v-text-field>
                                    </v-flex>

                                    <v-flex xs12 class="div-flex pt-0" justify-center align-center="">
                                        <v-btn depressed large color="primary">Modifier le mot de passe</v-btn>
                                    </v-flex>           
                                </v-layout>
                            </v-container>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-tab-item>

            <v-tab-item :value="'tab-' + 2">
                <v-card flat>
                    <v-card-text>
                        <p class="text-xs-center headline">Mes commandes</p>
                        <v-card>
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <v-card flat depressed>
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
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-card-text>
                </v-card>
            </v-tab-item>

            <v-tab-item :value="'tab-' + 3">
                <v-card flat>
                    <v-card-text>
                        <p class="text-xs-center headline">Mes adresses</p>
                        <v-flex xs12 class="div-flex pt-0" justify-center align-center="">
                            <v-btn depressed large color="primary">Ajouter une adresse</v-btn>
                        </v-flex>
                        <v-layout class="my-3">
                            <v-flex xs12 sm6 offset-sm3>
                                <v-card>
                                    <v-card-title class="div-flex">
                                        <div>
                                            <p class="mb-0 text-xs-center title mb-1">Clément Coniac</p>
                                            <p class="mb-0 text-xs-center">22 Rue du Débarcadère,</p>
                                            <p class="mb-0 text-xs-center">Paris, 75017, France</p>
                                        </div>
                                    </v-card-title>
                                    <v-card-actions class="div-flex-button-card">
                                        <v-btn depressed color="primary">Modifier</v-btn>
                                        <v-btn depressed color="error">Supprimer</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-tab-item>

            <v-tab-item :value="'tab-' + 4">
                <v-card flat>
                    <v-card-text>
                        <div class="title-images-content-mobile mb-2">
                            <p class="text-xs-center headline mb-0">Mes images</p>
                            <v-btn small depressed fab dark color="secondary">
                                <v-icon large>add</v-icon>
                            </v-btn>
                            <v-btn small depressed fab dark color="error">
                                <v-icon large>delete_forever</v-icon>
                            </v-btn>
                        </div>
                        <template>
                            <v-layout>
                                <v-flex xs12 sm6 offset-sm3>
                                <v-card>
                                    <v-container grid-list-sm fluid>
                                    <v-layout row wrap>
                                        <v-flex
                                        v-for="n in 9"
                                        :key="n"
                                        xs4
                                        d-flex
                                        >
                                        <v-card flat tile class="d-flex">
                                            <v-img
                                            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                                            aspect-ratio="1"
                                            class="grey lighten-2"
                                            >
                                            <template v-slot:placeholder>
                                                <v-layout
                                                fill-height
                                                align-center
                                                justify-center
                                                ma-0
                                                >
                                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                                </v-layout>
                                            </template>
                                            </v-img>
                                        </v-card>
                                        </v-flex>
                                    </v-layout>
                                    </v-container>
                                </v-card>
                                </v-flex>
                            </v-layout>
                        </template>
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs>
    </section>
</template>

<script>
    export default {
    data: () => ({
        valid: false,
        name: '',
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
    .div-flex{
        display: flex;
        justify-content: center;
    }
    .div-flex-button-card{
        display: flex;
        justify-content: space-around;
    }
    .title-images-content-mobile{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>
