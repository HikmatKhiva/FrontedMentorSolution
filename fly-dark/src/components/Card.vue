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
    v-motion="itemAnimate(index, 'left')"
    class="w-full lg:w-[30%] bg-testimonial p-5 rounded text-white mb-2"
  >
    <p class="lg:text-base text-sm">
      {{ card.title }}
    </p>
    <div class="flex mt-5 gap-2 items-center">
      <img
        class="w-8 h-8 rounded-full"
        :src="card.profile.image"
        :alt="card.profile.name"
      />
      <div class="">
        <h3>{{ card.profile.name }}</h3>
        <p class="text-[10px] lg:text-xs">{{ card.profile.occupation }}</p>
      </div>
    </div>
  </div>
</template>