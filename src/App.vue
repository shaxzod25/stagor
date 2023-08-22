<template>
  <div class="container">
    <Navbar />
    <router-view></router-view>
  </div>
   <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  }
}
</script>

<style>

</style>

