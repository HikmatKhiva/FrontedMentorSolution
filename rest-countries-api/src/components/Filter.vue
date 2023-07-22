<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
import { storage } from '../pinia/pinia'
import { filterButtons } from '../config'
const open = ref(false)
const data = storage()
const handleBtnFunct = (filter) => {
  data.handleSelect(`${filter}`)
  open.value = false
}
</script>
<template>
  <div class="flex py-5 justify-end md:justify-between gap-5 flex-wrap items-center">
    <!-- Search Input -->
    <div
      class="bg-white dark:bg-dark-card dark:text-white px-3 py-2 shadow-md rounded-md w-[350px] pl-5 flex items-center gap-5"
    >
      <span class="pi pi-search text-sm"></span>
      <input
        type="text"
        @input="data.handleChangeSearch"
        class="border-none bg-transparent outline-none flex-grow"
        placeholder="Search for a country"
      />
    </div>
    <!-- Filter Region -->
    <div @click.self="open" class="relative">
      <button
        @click="open = !open"
        class="flex flex-row w-[192px] dark:bg-dark-card dark:text-white items-center px-6 py-3 text-sm font-semibold text-left bg-white rounded-lg"
      >
        <span>Filter by Region</span>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          :class="{ 'rotate-180': open, 'rotate-0': !open }"
          class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        v-show="open"
        class="absolute top-[50px] z-50 right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
      >
        <div
          class="px-2 py-2 bg-white dark:bg-dark-card dark:text-white rounded-md shadow flex flex-col items-start"
        >
          <button
            v-for="btn in filterButtons"
            :key="btn.id"
            :disabled="data.loading"
            @click="handleBtnFunct(btn.filter)"
            :class="{'opacity-75':data.query == btn.filter}"
            class="pl-3 w-full text-start py-1"
          >
            {{ btn.title }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
