<script setup>
const Prop = defineProps({
  card: {
    type: Object,
    default: null,
  },
  index: {
    type: Number,
    default: 0,
  },
});
import { itemAnimate } from "../utils/motions";
</script>
<template>
  <div
    v-motion="itemAnimate(Prop.index, 'right')"
    class="card flex flex-col justify-center items-center text-center md:w-[40%]  w-full text-white"
  >
    <img class="lg:w-fit w-14 h-14 " :src="Prop.card.img" :alt="Prop.card.title" />
    <h2 class="my-1 lg:text-2xl text-xl">{{ Prop.card.title }}</h2>
    <p class="mx-auto lg:text-base text-sm">{{ Prop.card.desc }}</p>
  </div>
</template>