<template>
    <section class="ma-4">
       <v-container class="my-5">
           <h2 class="text-xs-center">Bienvenue sur l'admin de PhotoFlex veuillez choisir une catégorie à l'aide du menu ! </h2>
       </v-container>
    </section>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    mounted () {
        if(!this.$store.state.isUserLoggedIn || !this.$store.state.user.isAdmin) {
            this.$router.push({
                name: 'home'
            })
        }
    }
   
}

</script>

<style scoped>

</style>