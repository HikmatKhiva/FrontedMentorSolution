<script setup>
import { heroCard } from "../data";
import HeroCard from "./HeroCard.vue";
</script>
<template>
  <section class="relative">
    <div class="bg-ain py-10 ">
      <div class="container mx-auto flex md:justify-center flex-wrap gap-10 pb-5">
        <HeroCard
          v-for="(item, index) in heroCard"
          :key="item.id"
          :card="item"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>