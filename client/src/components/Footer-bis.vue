<template>
    <section class="secondary">
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 lg4 class="div-flex" align-center justify-center fill-height >
                    <router-link class="mb-4 link-foot" to="shop">
                        <span class="title link-pages-footer">Boutique</span>
                    </router-link>                    
                    <router-link class="mb-4 link-foot" to="team">
                        <span class="title link-pages-footer">Équipe</span>
                    </router-link>
                    <router-link class="link-foot" to="condition">
                        <span class="title link-pages-footer">CGV/Mention légal</span>
                    </router-link>
                </v-flex>

                <v-flex xs12 lg4 class="div-icons-socials my-4">
                    <a href="https://www.snapchat.com/l/fr-fr/"><img class="footer-icons" :src="require('../assets/img/snapchat-black.png')"></a>
                    <a href="https://mobile.twitter.com/"><img class="footer-icons" :src="require('../assets/img/twitter-black.png')"></a> 
                    <a href="https://www.instagram.com/"><img class="footer-icons" :src="require('../assets/img/instagram-black.png')"></a>
                    <a href="https://m.youtube.com/"><img class="footer-icons" :src="require('../assets/img/youtube-black.png')"></a>
                    <a href="https://www.facebook.com/"><img class="footer-icons" :src="require('../assets/img/facebook-black.png')"></a>
                </v-flex>
                
                <v-flex xs12 lg4 class="div-flex" justify-center align-center="">
                    <v-btn depressed large color="primary">Inscription newsletter</v-btn>
                </v-flex>

                <v-flex xs12 lg12 class="div-flex" align-center>
                    <p class="title mb-0">© 2019 Photo.Flex </p>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
export default {
    data () {
        return {
        }
    }
}
</script>
<style  scoped>
    .div-flex{
        display: flex;
        flex-direction: column;
    }
    .div-icons-socials{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .link-foot{
        text-decoration: none;
    }
    .div-flex .link-foot:hover{
        text-decoration: underline #000000;
    }
    .footer-icons:hover{
        border-bottom: solid 2px #F8D100;
    }
</style>