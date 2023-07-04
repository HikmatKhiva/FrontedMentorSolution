<script se>
import Header from "./components/Header.vue"
import HeroTitle from "./components/HeroTitle.vue";
import VR from "./components/VR.vue"
import Creation from "./components/Creation.vue";
import Footer from "./components/Footer.vue";
export default {
  data() {
    return {
      name: "Hikmat",
    }
  },
  components: { Header, HeroTitle, VR, Creation,Footer }
}
</script>
<template>
  <div class="wrap">
    <!-- Header Component -->
    <Header :name="name" />
    <div class="container content-centered">
      <!-- Hero title component -->
      <HeroTitle />
    </div>
  </div>
  <main>
    <div class="container">
      <!-- VR component -->
      <VR />
      <Creation />
    </div>
  </main>
  <Footer />
</template>

<style scoped></style>
