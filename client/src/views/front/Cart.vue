<template>
    <section>
        <v-container>
            <p class="text-xs-center headline">Votre panier</p>
            <v-layout>
                <v-flex xs12 sm6 offset-sm3>
                    <v-card>
                        <v-card-title class="div-flex">
                            <div>
                                <v-img class="" :src="require('../../assets/img/photo-device-photoshop.png')" aspect-ratio="2" width="100" height="100"></v-img>
                            </div>
                            <div>
                                <p class="mb-0 title mb-1">Sacoche appareil photo</p>
                                <p class="mb-0">Couleur : Noir</p>
                                <p class="mb-0">Quantité : 2 - 99.98</p>
                                <v-btn depressed color="secondary" class="ml-0 primary--text" width="100">remove</v-btn>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .div-flex{
        display: flex;
        justify-content: space-around;
    }
</style>