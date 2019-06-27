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
            <v-layout class="mt-4 best-seller-mobile" row wrap>
                <v-flex xs12 md6 lg6 class="d-flex" justify-space-around>
                    <v-hover>
                        <v-card slot-scope="{ hover }" class="hover-card">
                            <img :src="require('../../assets/img/photo-device-photoshop.png')" class="img-responsive" aspect-ratio="2">
                                <v-expand-transition>
                                    <div v-if="hover" class="d-flex transition-fast-in-fast-out secondary v-card--reveal black--text" style="height: 100%;">
                                        <p class="text-hover-name headline">Nom produit</p>
                                        <p class="text-hover-price headline">$14.99</p>
                                    </div>
                                </v-expand-transition>
                            <v-card-text class="pt-4 text-xs-center">
                                <v-btn to="/product" depressd-flexed color="primary" class="mb-4 mt-3">Fiche produit</v-btn>
                            </v-card-text>
                        </v-card>
                    </v-hover>

                    <v-hover>
                        <v-card slot-scope="{ hover }" class="hover-card">
                            <img :src="require('../../assets/img/photo-device-photoshop.png')" class="img-responsive" aspect-ratio="2">
                                <v-expand-transition>
                                    <div v-if="hover" class="d-flex transition-fast-in-fast-out secondary v-card--reveal black--text" style="height: 100%;">
                                        <p class="text-hover-name headline">Nom produit</p>
                                        <p class="text-hover-price headline">$14.99</p>
                                    </div>
                                </v-expand-transition>
                            <v-card-text class="pt-4 text-xs-center">
                                <v-btn to="/product" depressd-flexed color="primary" class="mb-4 mt-3">Fiche produit</v-btn>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-flex>
                <v-flex xs12 md6 lg6 class="d-flex" justify-space-around>
                    <v-hover>
                        <v-card slot-scope="{ hover }" class="hover-card">
                            <img :src="require('../../assets/img/photo-device-photoshop.png')" class="img-responsive" aspect-ratio="2">
                                <v-expand-transition>
                                    <div v-if="hover" class="d-flex transition-fast-in-fast-out secondary v-card--reveal black--text" style="height: 100%;">
                                        <p class="text-hover-name headline">Nom produit</p>
                                        <p class="text-hover-price headline">$14.99</p>
                                    </div>
                                </v-expand-transition>
                            <v-card-text class="pt-4 text-xs-center">
                                <v-btn to="/product" depressd-flexed color="primary" class="mb-4 mt-3">Fiche produit</v-btn>
                            </v-card-text>
                        </v-card>
                    </v-hover>

                    <v-hover>
                        <v-card slot-scope="{ hover }" class="hover-card">
                            <img :src="require('../../assets/img/photo-device-photoshop.png')" class="img-responsive" aspect-ratio="2">
                                <v-expand-transition>
                                    <div v-if="hover" class="d-flex transition-fast-in-fast-out secondary v-card--reveal black--text" style="height: 100%;">
                                        <p class="text-hover-name headline">Nom produit</p>
                                        <p class="text-hover-price headline">$14.99</p>
                                    </div>
                                </v-expand-transition>
                            <v-card-text class="pt-4 text-xs-center">
                                <v-btn to="/product" depressd-flexed color="primary" class="mb-4 mt-3">Fiche produit</v-btn>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-flex>
            </v-layout>
            <v-layout class="justify-center mt-4 mb-5">
                <v-btn to="/shop" depressed large color="primary">Voir la boutique</v-btn>
            </v-layout>
        </v-container>
        <v-layout class="secondary column align-center justify-center">
            <v-flex xs12 md6>
                <p class="headline mt-3 text-xs-center">Savoir qui nous sommes</p>
                <p class="text-xs-center">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
                <p class="text-xs-center">
                    <v-btn to="/team" class="mb-4" depressed large color="primary">Voir notre équipe</v-btn>
                </p>
            </v-flex>
            
        </v-layout>
    </section>
</template>

<script>
export default {
    
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
    .img-responsive{
        width: 75%;
    }
    .content-best-seller{
        display: flex;
        flex-direction: column;
        align-items: center;
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
