<script setup>
import { onMounted, watch } from 'vue'
import { FlagCard, Filter, Loading } from '../components'
import { storage } from '../pinia/pinia'
const data = storage()
// Life Cycle
onMounted(() => data.fetchApi('https://restcountries.com/v3.1'))
// watches
watch(
  () => data.query,
  (newValue, oldValue) => {
    if (newValue !== oldValue) data.fetchApi('https://restcountries.com/v3.1')
  }
)
</script>
<template>
  <div class="container mx-auto px-5 xl:px-0">
    <Filter />
    <div class="flex flex-wrap gap-[80px]" v-if="data.countries !== null && !data.loading">
      <FlagCard
        v-for="(country, index) in data.filterCountries"
        :key="index"
        :index="index"
        :country="country"
      />
    </div>

    <div v-else class="flex flex-wrap gap-[80px]">
      <Loading v-for="item in 8" :key="item" />
    </div>
  </div>
</template>
