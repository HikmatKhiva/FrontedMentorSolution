<script setup>
import { accessAnimation } from "../utils/motions";
</script>
<template>
  <section class="absolute w-full left-1/2 -translate-x-1/2 -translate-y-28">
    <div class="container w-full  mx-auto">
      <div v-motion="accessAnimation" 
        class="w-[90%] lg:w-[800px] rounded p-5 md:p-12 mx-auto bg-intro text-center text-white">
        <h2 class="text-2xl">Get early access today</h2>
        <p class="text-sm my-4">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div class="flex gap-5 flex-wrap">
          <input
            type="text"
            class="flex-grow outline-none p-1 px-4 rounded-full text-black"
            placeholder="email@example.com"
          />
          <button class="btn-access px-8 py-1 flex-grow md:flex-grow-0">Get Started</button>
        </div>
      </div>
    </div>
  </section>
</template>
