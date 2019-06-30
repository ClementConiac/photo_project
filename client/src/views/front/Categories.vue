<template>
    <section>            
        <div class="tabs-shop secondary py-3">
            <h3 class="mb-0">Catégorie n°1</h3>
        </div>
        <v-container class="container-categories">
            <v-layout class="mt-4 best-seller-mobile" row wrap justify-center>
                <v-flex xs12 md6 lg6 class="d-flex" justify-space-around>
                    <v-hover class="mx-3"  v-for="item in items" :key="item.id">
                        <v-card slot-scope="{ hover }" class="hover-card">
                            <img :src="require(`../../assets/img/${item.image}`)" class="img-responsive" aspect-ratio="2">
                                <v-expand-transition>
                                    <div v-if="hover" class="d-flex transition-fast-in-fast-out secondary v-card--reveal black--text" style="height: 100%;">
                                        <p class="text-hover-name headline">{{ item.title }}</p>
                                        <p class="text-hover-price headline">{{ item.price }}€</p>
                                    </div>
                                </v-expand-transition>
                            <v-card-text class="pt-4 text-xs-center">
                                <v-btn :to="{name:'product-id', params:{productId: item.id}}" depressd-flexed color="primary" class="mb-4 mt-3">Fiche produit</v-btn>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
import FrontEndService from '@/services/FrontEndService'

  export default {
    data () {
      return {
        items: null
      }
    },
    async mounted () {
        this.items = (await FrontEndService.displayItems()).data
    },
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
    .img-responsive{
        width: 75%;
    }
    .v-card--reveal {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0.7;
        bottom: 0;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .hover-card{
        width: 30%;
        display: flex;
        background-color: white !important;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: none;
    }
    .text-hover-name{
        padding: 170px 0px 0px 0px;
        margin: 0px 0px 0px 0px;
    }
    .text-hover-price{
        padding: 0px 0px 90px 0px; 
        margin: 0px 0px 0px 0px;
    }
</style>

