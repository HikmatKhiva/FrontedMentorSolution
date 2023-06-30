<script setup>
import { RouterLink } from "vue-router"
import { fadeCard } from "../utils/motion"
defineProps({
    country: {
        type: Object,
    },
    index: {
        type: Number,
        default: 0
    }
})
</script>
<template>
    <div v-motion="fadeCard(index)" class="flag-card dark:bg-dark-card dark:text-white shadow-md">
        <RouterLink :to="{ name: 'country', params: { name: country?.name.common } }">
            <img class="object-cover border-b dark:border-dark w-full h-1/2 rounded-t-lg" :src="country.flags.svg"
                :alt="country.flags.alt || `flag-${country.name.common}`">
        </RouterLink>
        <div class="px-10 pt-5 pb-10">
            <h3 class="text-xl font-bold mb-3">{{ country.name.common }}</h3>
            <p class="font-bold">Population: <span class="font-normal"> {{ country?.population }}</span> </p>
            <p class="font-bold">Region: <span class="font-normal"> {{ country.region }}</span> </p>
            <p class="font-bold">Capital: <span class="font-normal">{{ country?.capital?.join('') }}</span> </p>
        </div>
    </div>
</template>
