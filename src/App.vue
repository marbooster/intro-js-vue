<template>
  <main id="body-site">
    <Header />
    <BodySite />
  </main>
  <Footer />
</template>

<script >
import Header from './components/Header/Header.vue';
import BodySite from './components/BodySite/BodySite.vue'
import Footer from './components/Footer/Footer.vue';

export default {
  components: {
    Header,
    BodySite,
    Footer
  }
}
</script>



<style scoped>
</style>
