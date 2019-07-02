<template>
    <section>
        <v-container>
            <v-layout column align-center>
                <v-flex>
                    <v-card v-if="hasProduct()">
                        <v-card-title class="d-flex-title-card">
                            <h2 class="headline font-weight-bold">Récapitulation de votre Panier</h2>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text v-for="(product, index) in getProductsInCart" :key="index" class="d-flex-card">
                            <v-layout row wrap justify-center>
                                <v-flex xs12 md3 class="hidden-xs-only mr-5">
                                    <img :src="require(`../../assets/img/${product.image}`)" class="img-responsive" aspect-ratio="2">
                                </v-flex>
                                <v-flex xs12 md3 class="d-flex-img-mobile hidden-sm-and-up">
                                    <img :src="require(`../../assets/img/${product.image}`)" class="img-responsive-mobile" aspect-ratio="2">
                                </v-flex>
                                <v-flex xs12 md3 class="d-flex-info">
                                    <p class="mb-0 title mb-1">{{ product.title }}</p>
                                    <p class="mb-0 mb-1 text-description text-xs-center">{{ product.description }}</p>
                                    <p class="mb-0 title mb-1">{{ product.price }}€</p>
                                    <v-btn depressed color="error accent--text" class="ml-0 primary--text" @click="remove(index)">remove</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-card-text> 
                        <v-card-title class="d-flex-title-price">
                            <div class="payement-informations">
                                <p class="text-xs-center mb-2 font-weight-bold">Articles: {{ totalPrice() }}€</p>
                                <p class="text-xs-center mb-2 font-weight-bold">Livraison: 5€</p>
                                <p class="text-xs-center mb-2 headline font-weight-bold">Total TTC*: {{ totalPrice() + 5}}€</p>
                                <v-btn to="payement" depressed large color="primary accent--text" class="mt-4 ml-0">Payer maintenant</v-btn>
                                <p>*Tous nos prix sont toutes taxes comprises.</p>
                            </div>
                        </v-card-title>
                    </v-card>
                    <div v-if="!hasProduct()" class="mt-5 empty-cart-summary">
                        <h1>Pas de produit dans le panier ... :(</h1>
                        <v-btn depressed large color="secondary primary--text" to="/shop" class="my-4 ml-0">Boutique</v-btn>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'
export default {
     data () {
        return {
        }
    },
    computed: {
        ...mapGetters([
            'getProductsInCart',
        ])
    },
    methods: {
        ...mapActions([
            'removeProduct',
        ]),
        hasProduct() {
            return this.getProductsInCart.length > 0;
        },
        totalPrice() {
            return this.getProductsInCart.reduce((current, next) =>
            (current-next.price*-1), 0);
        },
        remove(index) {
            this.removeProduct(index);
        },
    }
}
</script>


<style scoped>
    .d-flex-title-card{
        display: flex;
        justify-content: center;
    }
    .d-flex-card{
        display: flex;
        justify-content: space-around;
        border-bottom: solid 1px rgba(0,0,0,0.12);
    }
    .d-flex-info{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    .d-flex-title-price{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .text-description{
        max-width: 400px;
    }
    .empty-cart-summary{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .payement-informations{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .img-responsive{
        width: 100%;
    }
    .img-responsive-mobile{
        width: 100%;
    }
    .d-flex-img-mobile{
        display: flex;
        justify-content: center;
    }
</style>