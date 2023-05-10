<script setup>
import {
  Navbar,
  Hero,
  HeroCards,
  Productive,
  Access,
  Footer,
} from "./components";
import { curvyDesktop,curvyMobile } from "./assets";
</script>
<template>
  <div class="bg-intro overflow-x-hidden">
    <img
      class="absolute w-full lg:block hidden mountain lg:top-[680px] 2xl:left-1/2 2xl:-translate-x-1/2 2xl:w-fit"
      :src="curvyDesktop"
      alt="curvyDesktop"
    />
    <img :src="curvyMobile" class="lg:hidden mobile block absolute w-full h-fit top-[650px] sm:top-[680px]" alt="curvyMobile">
    <div class="container mx-auto">
      <Navbar />
    </div>
    <main class="relative">
      <Hero />
      <HeroCards />
      <Productive />
      <Access />
    </main>
    <Footer />
  </div>
</template>
