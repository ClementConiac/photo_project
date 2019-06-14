<template>
    <section>            
        <v-tabs v-model="active" color="secondary" slider-color="primary">
            <v-tab v-for="item in items" :key="item.title" ripple>
                {{ item.title }}
            </v-tab>
        </v-tabs>
        <v-container class="container-categories">
            
            <v-layout class="mt-4 shop-mobile" row wrap>
                <v-flex xs12 md6 lg6 class="d-flex" justify-space-around>
                    <div class="content-categorie">
                        <img :src="require('../../assets/img/photo-device-photoshop.png')" class="responsive-img" aspect-ratio="2">
                        <v-btn to="/product" depressed color="primary" class="mb-4 mt-3">Fiche produit</v-btn>
                    </div>
                    <div class="content-categorie">
                        <img :src="require('../../assets/img/photo-device-photoshop.png')" class="responsive-img" aspect-ratio="2">
                        <v-btn to="/product" depressed color="primary" class="mt-3">Fiche produit</v-btn>
                    </div>
                </v-flex>
                <v-flex xs12 md6 lg6 class="d-flex" justify-space-around>
                    <div class="content-categorie">
                        <img :src="require('../../assets/img/photo-device-photoshop.png')" class="responsive-img" aspect-ratio="2">
                        <v-btn to="/product" depressed color="primary" class="mb-4 mt-3">Fiche produit</v-btn>
                    </div>
                    <div class="content-categorie">
                        <img :src="require('../../assets/img/photo-device-photoshop.png')" class="responsive-img" aspect-ratio="2">
                        <v-btn to="/product" depressed color="primary" class="mt-3">Fiche produit</v-btn>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
  export default {
    data () {
      return {
        active: null,
        items: [
            {
             title: 'aze',
             books: [
                {
                    title: 'Books vert',
                    text: 'aze',
                    img: require('../../assets/img/multicolor_package-front.jpg'),
                    titleCategory: 'Livres'
                },
                {
                    title: 'Books bleu',
                    text: 'rty',
                    img: require('../../assets/img/multicolor_package-front.jpg'),    
                },
                {
                    title: 'Books jaune',
                    text: 'uio',
                    img: require('../../assets/img/multicolor_package.jpg'),
                },
            ],
            housses: [
                {
                    title: 'Housse verte',
                    text: 'aze',
                    img: require('../../assets/img/multicolor_package-front.jpg'),
                    titleCategory: 'Housses'
                },
                {
                    title: 'Housse bleu',
                    text: 'rty',
                    img: require('../../assets/img/multicolor_package-front.jpg'),     
                },
                {
                    title: 'Housse jaune',
                    text: 'uio',
                    img: require('../../assets/img/multicolor_package.jpg'),
                },
            ],
            backpacks: [
                {
                    title: 'Backpack vert',
                    text: 'aze',
                    img: require('../../assets/img/multicolor_package-front.jpg'),
                    titleCategory: 'Sac à dos' 
                },
                {
                    title: 'Backpack bleu',
                    text: 'rty',
                    img: require('../../assets/img/multicolor_package-front.jpg'),     
                },
                {
                    title: 'Backpack jaune',
                    text: 'uio',
                    img: require('../../assets/img/multicolor_package.jpg'),
                },
            ],
        }
       
        ],
        

      }
    },
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
        
      }
    }
  }
</script>

<style scoped>
    .container-categories{
        padding: 0;
    }
    .responsive-img{
        width: 75%;
    }
    .content-categorie{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
<style>
    .v-tabs__container{
        display: flex;
        justify-content: space-evenly;
    }
</style>

