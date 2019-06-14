<template>
  <v-app>
    <Header v-if="!$route.meta.requiresHeader"/>
      <v-content class="accent">
        <router-view>
        </router-view>
      </v-content>
    <Footer v-if="!$route.meta.requiresFooter"/>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default {
  name: 'App',
  components: {
    Header , Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
