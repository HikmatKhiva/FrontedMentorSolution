<script setup>
import { stayProductive, arrow } from "../assets";
import { productive } from "../utils/motions";
import { cardsData } from "./../data";
import Card from "./Card.vue";
</script>
<template>
  <section class="bg-ain py-10 overflow-x-hidden">
    <div class="container mx-auto">
      <div class="flex items-center gap-5 flex-wrap lg:flex-nowrap justify-center">
        <img
          v-motion="productive.imageAnimate"
          :src="stayProductive"
          alt="stayProductive"
          class="select-none"
        />
        <div v-motion="productive.titleContent" class="text-white px-10 lg:px-0">
          <h2 class="text-2xl lg:text-4xl">
            Stay productive, <br />
            wherever you are
          </h2>
          <p class="mb-2">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a
            href="#/"
            class="flex items-center gap-2 border-b mt-1 border-aqua hover:border-white hover:text-white transition-all duration-200 w-fit text-aqua pb-1"
            >See how Fylo works
            <img :src="arrow" alt="icon-arrow" />
          </a>
        </div>
      </div>
      <div class="flex flex-wrap justify-between lg:gap-5 my-20 mb-32 lg:px-0 px-10">
        <Card v-for="(card, index) in cardsData" :card="card" :key="card.id" :index="index" />
      </div>
    </div>
  </section>
</template>