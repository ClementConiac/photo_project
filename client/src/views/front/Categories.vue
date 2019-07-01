<template>
    <section>            
        <div class="tabs-shop secondary py-3">
            <h3 class="mb-0">Catégorie n°1</h3>
        </div>
        <v-container class="container-categories">
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
     async mounted () {
        this.items = (await FrontEndService.displayItems()).data
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
    .container-categories{
        padding: 0;
    }
    .tabs-shop{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .d-flex-center{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .img-responsive{
        width: 40%;
    }
</style>

