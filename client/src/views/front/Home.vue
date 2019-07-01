<template>
    <section>
        <v-container fluid class="pa-0">
            <v-layout class="background-home">
                <p class="text-xs-center text-lg-center display-1 accent--text title-background-home">Laissez parler le talent qui sommeille en vous</p>
            </v-layout>
            <v-layout class="secondary" justify-center>
                <p class="headline text-xs-center my-4">Meilleurs ventes</p>
            </v-layout>
        </v-container>
        <v-container class="container-home">
            <v-layout class="mt-4 best-seller-mobile" row wrap justify-center>
                <v-flex xs12 md6 lg6 v-for="(product, index) in getProducts" :key="index" class="d-flex-center">
                    <img :src="require(`../../assets/img/${product.image}`)" alt="" class="img-responsive">
                    <p class="mb-0 headline font-weight-bold">{{ product.title }}</p>
                    <p class="mb-0 headline">{{ product.price }}€</p>
                    <router-link to="product">
                        <v-btn depressed color="primary" @click="addCurrentProduct(product)" class="mb-4 mt-3">Fiche produit</v-btn>
                    </router-link>
                </v-flex>
            </v-layout>
            <v-layout class="justify-center mt-4 mb-5">
                <v-btn to="/shop" depressed large color="primary">Voir la boutique</v-btn>
            </v-layout>
        </v-container>
        <v-layout class="secondary column align-center justify-center">
            <v-flex xs12 md6>
                <p class="headline mt-3 text-xs-center">Savoir qui nous sommes</p>
                <div class="team-text">
                    <p class="text-xs-center">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
                </div>
                <p class="text-xs-center">
                    <v-btn to="/team" class="mb-4" depressed large color="primary">Voir notre équipe</v-btn>
                </p>
            </v-flex>
            
        </v-layout>
    </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import FrontEndService from '@/services/FrontEndService'

export default {
    data () {
        return {
        }
    },
     computed: {
        ...mapGetters([
            'getProducts',
        ]),
    },
    methods: {
        ...mapActions([
            'addProduct',
            'currentProduct',
        ]),
        addProductToCart(product) {
            this.addProduct(product);
        },
        addCurrentProduct(product) {
            this.currentProduct(product);
        },
        
    }
}
</script>

<style scoped>
    .container-home{
        padding: 0;
    }
    .background-home{
        background: url('../../assets/img/bg-ordi.png');
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
        height: auto;
    }
    .background-home p{
        padding-top: 15%;
        padding-bottom: 15%;
    }
    .title-background-home{
        width: 100%;
    }
    .d-flex-center{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .team-text{
        max-width: 800px;
    }
    .img-responsive{
        width: 40%;
    }
</style>
