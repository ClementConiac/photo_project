<template>
    <section>
        <v-layout class="secondary hidden-sm-and-up" justify-center>
            <p class="headline text-xs-center mr-5 my-4">Titre du produit</p>
            <p class="headline text-xs-center ml-5 my-4">49.99€</p>
        </v-layout>
        <v-container class="container-product mt-3">
            <v-layout justify-space-around row wrap>
                <v-flex xs12 lg6 md6 sm6 class="control-main-img">
                    <img :src="require('../../assets/img/photo-device-photoshop.png')" class="" alt="">
                    <div class="control-group-img">
                        <img :src="require('../../assets/img/photo-device-photoshop.png')" class="img-test" alt="">
                        <img :src="require('../../assets/img/photo-device-photoshop.png')" class="img-test" alt="">
                        <img :src="require('../../assets/img/photo-device-photoshop.png')" class="img-test" alt="">
                    </div>
                </v-flex>

                <v-flex xs12 lg3 class="information-product-mobil mt-3 hidden-sm-and-up">
                    <p class="title">Description</p>
                    <p class="text-xs-center px-3">Sacoche pour appareil photo compatible avec la plupart des appareils photos compacts
                    Une poche à fermeture permet de stocker des cartes mémoire et d'autres accessoires de petite taille
                    Une poche à fermeture permet de stocker des cartes mémoire et d'autres accessoires de petite taille
                    </p>
                    <v-btn to="/modify" depressed large color="primary" class="mt-4 ml-0">Modifier le produit</v-btn>
                </v-flex>

                <v-flex xs12 lg6 md6 sm6 class="information-product mt-3 hidden-xs-only">
                    <div>
                        <h3 class="headline">Titre du produit</h3>
                        <p class="headline">49.99€</p>
                    </div>
                    
                    <div>
                        <p class="title">Description</p>
                        <p>Sacoche pour appareil photo compatible avec la plupart des appareils photos compacts
                        Une poche à fermeture permet de stocker des cartes mémoire et d'autres accessoires de petite taille
                        Une poche à fermeture permet de stocker des cartes mémoire et d'autres accessoires de petite taille
                        </p>
                    </div>
                    
                    <v-btn to="/modify" depressed large color="primary" class="mt-4 ml-0">Modifier le produit</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>
<script>
export default {
    data () {
      return {
        items: [
          {
            src: require('../../assets/img/multicolor_package.jpg'),
          },
          {
            src: require('../../assets/img/multicolor_package.jpg'),
          },
        ],
        page : 1,
        radios: 'radio-1'
      }
    },
    computed: {
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
    .img-test{
        width: 30%;
        height: 30%;
    }
</style>

