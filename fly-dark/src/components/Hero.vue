<script setup>
import { illustrationIntro } from "../assets";
import { heroMotion,titleAnimation,subTitleAnimation,buttonAnimate } from "../utils/motions";
</script>
<template>
  <section id="hero" class="flex flex-col items-center py-5 mt-10 mb-5 relative">
    <img
      v-motion="heroMotion.img"
      :src="illustrationIntro"
      alt="illustrationIntro"
      class="mb-10"
    />
    <div class="flex flex-col items-center relative z-20">
      <h1 v-motion="titleAnimation" class="text-white text-2xl lg:text-[2.8rem] text-center">
        All your files in one secure location, <br />
        accessible anywhere.
      </h1>
      <p 
      v-motion="subTitleAnimation" 
      class="lg:w-[50%] w-[80%] mx-auto lg:text-xl text-sm text-white text-center my-2">
        Fylo stores all your most important files in one secure location. Access
        them whenever you need, share and collaborate with friends, family, and
        co-workers.
      </p>
      <button v-motion="buttonAnimate('left')" class="btn-started ">Get Started</button>
    </div>
  </section>
</template>