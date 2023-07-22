<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>
<template>
  <Header />
  <main class="bg-light dark:bg-dark min-h-screen">
    <RouterView />
  </main>
</template>
<style>
@import 'primeicons/primeicons.css';
</style>
