<template>
    <section>
        <v-layout class="secondary hidden-sm-and-up" column justify-center>
            <p class="headline text-xs-center mt-3 font-weight-bold">{{ currentProduct.title }}</p>
            <p class="headline text-xs-center">{{ currentProduct.price }}€</p>
        </v-layout>
        <v-container class="container-product mt-3">
            <v-layout justify-space-around row wrap>
                <v-flex xs12 lg6 md6 sm6 class="control-main-img">
                    <img :src="require(`../../assets/img/${currentProduct.image}`)" class="img-responsive" aspect-ratio="2">
                    <div class="control-group-img">
                        <img :src="require(`../../assets/img/${currentProduct.image}`)" class="img-small" aspect-ratio="2">
                        <img :src="require(`../../assets/img/${currentProduct.image}`)" class="img-small" aspect-ratio="2">
                        <img :src="require(`../../assets/img/${currentProduct.image}`)" class="img-small" aspect-ratio="2">
                    </div>
                </v-flex>
                <v-flex xs12 lg3 class="information-product-mobil mt-3 hidden-sm-and-up">
                    <p class="title">Description</p>
                    <p class="text-xs-center px-3">{{ currentProduct.description }}</p>
                    <v-btn to="/modify" depressed large color="primary" class="my-4 ml-0">Modifier le produit</v-btn>
                    <p class="font-weight-bold mb-0">OU</p>
                    <v-btn depressed large color="primary" class="mt-4 ml-0 mb-5" @click="addProductToCart(currentProduct)">Ajouter au panier</v-btn>
                </v-flex>
                <v-flex xs12 lg6 md6 sm6 class="information-product mt-3 hidden-xs-only">
                    <div>
                        <h3 class="headline pb-4 font-weight-bold">{{ currentProduct.title }}</h3>
                        <p class="headline">{{ currentProduct.price }}€</p>
                    </div>
                    <div>
                        <p class="title">Description</p>
                        <p>{{ currentProduct.description }}</p>
                    </div>
                    <div>
                        <v-btn to="/modify" depressed large color="primary" class="my-4 ml-0">Modifier le produit</v-btn>
                        <v-btn depressed large color="primary" class="my-4 ml-0" @click="addProductToCart(currentProduct)">Ajouter au panier</v-btn>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
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
        ...mapGetters({
            currentProduct: 'getCurrentProduct',
        }),
    },
    methods: {
        ...mapActions([
            'addProduct',
        ]),
        addProductToCart(product) {
            this.addProduct(product);
        },
    }
}
</script>

<style scoped>
    .container-product{
        padding: 0;
    }
    .information-product{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
    .information-product-mobil{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .tab-panel{
        box-shadow: none;
    }
    .v-card__text{
        padding-left: 0;
    }
    .control-main-img{
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 415px;
    }
    .control-group-img{
        display: flex;
        justify-content: space-evenly;
    }
    .img-responsive{
        width: 100%;
    }
    .img-small{
        width: 30%;
        height: 30%;
    }
</style>

