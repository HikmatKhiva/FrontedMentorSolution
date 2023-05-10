<script setup>
import { footerList, socialAddress } from "../data";
import { location, phone, email, logo } from "../assets";
import { socialAnimate, itemAnimate } from "../utils/motions";
</script>
<template>
  <footer class="pt-40 pb-5 bg-footer text-white">
    <div class="container mx-auto">
      <img :src="logo" alt="footer-logo" class="md:mb-5 mb-5  w-[150px] md:w-fit my-10 md:my-0" />
      <div class="flex px-5 flex-wrap gap-x-10 justify-between">
        <div class="flex lg:w-[350px] w-full items-start gap-3">
          <img :src="location" alt="location" class="mt-1" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div class="lg:w-[250px] w-full my-5 lg:my-0">
          <div class="flex items-center gap-3">
            <img :src="phone" alt="phone-icon" />
            <p>+1-543-123-4567</p>
          </div>
          <div class="flex items-center gap-3">
            <img :src="email" alt="email-icon" />
            <p>example@fylo.com</p>
          </div>
        </div>
        <ul class="flex flex-wrap lg:w-[400px] w-full footer-list my-5 lg:my-0">
          <li
            v-for="(list, index) in footerList"
            v-motion="itemAnimate(index, 'bottom')"
            class="mb-1 lg:w-1/2 w-full"
            :key="index"
          >
            {{ list }}
          </li>
        </ul>
        <div class="flex gap-3 w-full">
          <a
            v-for="(social, index) in socialAddress"
            v-motion="socialAnimate(index)"
            class="hover:text-aqua text-white transition-all duration-500"
            :key="social.id"
            :href="social.url"
          >
            <i class="text-xl" :class="social.icon"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>