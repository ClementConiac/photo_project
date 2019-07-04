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
                                    <v-form class="mb-3">
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
                        <v-flex md6 xs12 sm8>
                            <v-card>
                                <v-card-title class="d-flex-title-card">
                                    <h2 class="headline font-weight-bold">Récapitulation de vos commandes</h2>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text class="d-flex-card">
                                    <v-layout row wrap justify-center>
                                        <v-flex xs12 md4 class="hidden-xs-only mr-5">
                                            <img src="./../../assets/img/1561915638954casquette-modif.jpg" class="img-responsive" aspect-ratio="2">
                                        </v-flex>
                                        <v-flex xs12 md3 class="d-flex-img-mobile hidden-sm-and-up">
                                            <img src="./../../assets/img/1561915638954casquette-modif.jpg" class="img-responsive-mobile" aspect-ratio="2">
                                        </v-flex>
                                        <v-flex xs12 md6 class="d-flex-info">
                                            <p class="mb-0 title mb-1 title font-weight-bold text-xs-center">Casquette Metal Swoosh H86</p>
                                            <p class="mb-0 mb-1 text-description text-xs-center subheading font-weight-bold">6 rue de paris, France, Paris, 75019</p>
                                            <p class="mb-0 title mb-1">25€</p>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text> 
                            </v-card>
                        </v-flex>
                        
                    </v-layout>
                </v-container>
                
            </v-tab-item>

            <v-tab-item :value="'tab-' + 3">
                <v-container>
                    <v-card flat>
                        <v-layout row wrap justify-center class="pa-3">
                            <v-flex xs12 sm8 md6 class="test">
                                <v-dialog max-width="600px" v-model="dialogAdressCreate">
                                    <v-btn flat slot="activator" class="primary ml-0">Add a new adress</v-btn> <!-- activator make true by default -->
                                        <v-card>
                                            <v-card-title>
                                                <h2>Add a new adress</h2>
                                            </v-card-title>
                                            <v-card-text>
                                                <v-form ref="form">
                                                    <v-text-field type="text" v-model="createAdress.adress" :rules="adressRules" label="Adress" prepend-icon="folder"></v-text-field>
                                                    <v-text-field type="text" v-model="createAdress.country" :rules="adressRules" label="Cuntry and city" prepend-icon="folder"></v-text-field>
                                                    <v-text-field type="text" v-model="createAdress.postalCode" :rules="postalRules" label="Postal code" prepend-icon="folder"></v-text-field>
                                                    <v-btn flat class="mx-0 mt-3 primary" @click="create">Save</v-btn>
                                                </v-form>
                                            </v-card-text>
                                        </v-card>
                                </v-dialog>
                            </v-flex>
                        </v-layout>
                    </v-card> 

                    <v-layout justify-center>
                        <v-flex xs12 md6>
                            <v-card flat class="grey lighten-4 mb-4" v-for="adress in adresses" :key="adress.id">
                                <v-layout row wrap :class="`pa-3`">
                                    <v-flex xs12 sm12 md3 class="d-card-elem">
                                        <div class="caption grey--text ">Adress</div>
                                        <div>{{adress.title}}</div>
                                    </v-flex>
                                    <v-flex xs12 sm12 md3 class="d-card-elem">
                                        <div class="caption grey--text ">Country / city</div>
                                        <div>{{adress.country}}</div>
                                    </v-flex>
                                    <v-flex xs12 sm12 sm4 md2 class="d-card-elem">
                                        <div class="caption grey--text ">Postal code</div>
                                        <div>{{adress.postal}}</div>
                                    </v-flex>
                                    <v-flex xs12 sm12 md4 class="d-card-btn">
                                        <v-dialog max-width="600px">
                                            <v-btn flat slot="activator" class="orange accent--text" :to="{name:'account-adress-id', params:{adressId: adress.id}}">Modify</v-btn>
                                                <v-card>
                                                    <v-card-title>
                                                        <h2>Modify an adress</h2>
                                                    </v-card-title>
                                                    <v-card-text>
                                                        <v-form ref="formUpdate">
                                                            <v-text-field type="text" label="Adress" v-model="adressUpdate.title" :placeholder="adress.title" prepend-icon="folder"></v-text-field>
                                                            <v-text-field type="text" label="Cuntry and city" v-model="adressUpdate.country" :placeholder="adress.country" prepend-icon="folder"></v-text-field>
                                                            <v-text-field type="email" label="Postal code" v-model="adressUpdate.postal" :placeholder="adress.postal" prepend-icon="folder"></v-text-field>
                                                            <v-btn flat class="mx-0 mt-3 primary" @click="modify">Modify</v-btn>
                                                        </v-form>
                                                    </v-card-text>
                                                </v-card>
                                        </v-dialog>
                                        <v-dialog max-width="290">
                                            <v-btn flat slot="activator" class="red accent--text" :to="{name:'account-adress-id', params:{adressId: adress.id}}">Delete</v-btn>
                                            <v-card>
                                                <v-card-title class="headline">Verification</v-card-title>

                                                <v-card-text>
                                                    <p>Are you sure you want to delete the adress : <span class="font-weight-bold">{{ adress.title }} ?</span></p>
                                                </v-card-text>

                                                <v-card-actions>
                                                    <v-spacer></v-spacer>

                                                    <v-btn class="primary accent--text" flat @click="dialogSecure = !dialogSecure">
                                                        Disagree
                                                    </v-btn>

                                                    <v-btn class="error accent--text" flat @click="remove">
                                                        Agree
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                    </v-flex>
                                </v-layout>
                                <v-divider></v-divider>
                            </v-card>
                        </v-flex>  
                    </v-layout>
                </v-container>
            </v-tab-item>
        </v-tabs>
    </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import FrontEndService from '@/services/FrontEndService'

export default {
    data: () => ({
        valid: false,
        lastname: '',
        nameRules: [
            v => !!v || 'lastname require',
        ],
        firstname: '',
        firstnameRules: [
            v => !!v || 'Prénom require',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail require',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        pasword: '',
        paswordRules: [
            v => !!v || 'Pasword require',
        ],

        adressRules: [
            v => !!v || 'Adress or country require',
        ],
        postalRules: [
            v => v >= /^[0-9]$/ || 'Only number allowed here'
        ],
        adresses: null,
        orders: null,
        dialogAdressCreate: false,
        dialogAdressDelete: false,
        createAdress: {
            adress: '',
            country: '',
            postalCode: ''
        },
        adressUpdate: {
            title: '',
            country: '',
            postal: ''
        }
    }),
    async mounted () {
        if(!this.$store.state.isUserLoggedIn) {
            this.$router.push({
                name: 'home'
            })
        }
        const orders = await FrontEndService.order({
            userId: this.$store.state.user.id,
            adressId: 17,
            itemId: 1
        })
        console.log('order: ', orders)

        this.adresses = (await FrontEndService.index({
            userId: this.$store.state.user.id
        })).data
    },
    methods: {
        async create() {
            if (this.$refs.form.validate()){
                window.location.reload()
                try{
                const response = await FrontEndService.createAdress({
                    title: this.createAdress.adress,
                    country: this.createAdress.country,
                    postal: this.createAdress.postalCode,
                    UserId: this.$store.state.user.id,
                }).then(() => {
                    this.dialog = false
                    this.$router.push({
                        name: 'account-id'
                    })
                })
                } catch (error) {
                    this.error = error.response.data.error
                }
            }
        },
        async modify () {
            const adressId = this.$route.params.adressId
            window.location.reload()
             try {
                await FrontEndService.updateAdress(adressId, this.adressUpdate)
                console.log(adressId , this.adressUpdate)
            } catch (err) {
                console.log(err)
            }
        },
        async remove() {
            const adressId = this.$route.params.adressId
            window.location.reload()
            try{
                const response = await FrontEndService.removeAdress(adressId)
            } catch (error) {
                this.error = error.response.data.error
            }
        }
    }
    
}
</script>
<style scoped>
    .d-flex-title-card{
        display: flex;
        justify-content: center;
    }
    .button-adress-action{
        display: flex;
        flex-direction: row;
    }
    .d-card-elem{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .d-card-btn{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .test{
        display: flex;
        justify-content: center;
    }
    .img-responsive{
        width: 75%
    }
    .img-responsive-mobile{
        width: 75%
    }
    .d-flex-info{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    .d-flex-img-mobile{
        display: flex;
        justify-content: center;
    }
</style>
