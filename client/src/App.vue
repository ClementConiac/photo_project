<template>
  <v-app>
    <Header-back v-if="$route.meta.admin"/>
    <Header v-if="!$route.meta.requiresHeader"/>
      <v-content class="accent">
        <router-view>
        </router-view>
      </v-content>
    <FooterBis v-if="!$route.meta.requiresFooterBis"/>
    <Footer v-if="!$route.meta.requiresFooter"/>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeaderBack from '@/components/Header-back'
import FooterBis from '@/components/Footer-bis'
import FrontEndService from '@/services/FrontEndService'

export default {
  name: 'App',
  components: {
    Header , Footer , HeaderBack , FooterBis
  },
  data () {
    return {
      items: null
    }
  },
  async mounted () {
        this.items = (await FrontEndService.displayItems()).data
        this.$store.dispatch('setItems', this.items)
    },
}
</script>
