<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router"
import {PageLoading} from "../components"
const params = useRoute()
const country = ref(null)
const bordersCountry = ref(null)
const fetchApi = async () => {
    try {
        const data = await fetch(`https://restcountries.com/v3.1/name/${params.params.name}`)
        const json = await data.json()
        country.value = json[0]
        const borderCountryCodes = json[0]?.borders || []
        const allBorderCountry = await Promise.all(borderCountryCodes.map(async code => {
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
            const data = await response.json()
            return data[0].name.common
        }))
        bordersCountry.value = allBorderCountry
    } catch (err) {
        console.log(err)
    }
}
onMounted(() => fetchApi())
const lang = computed(() => Object.entries(country.value?.languages).flat().filter(txt => txt[0] === txt.replace(/[^A-Z]+/g, "")) || []);
watch(()=>params.params.name,(newValue,oldValue)=>{
    if(newValue !== oldValue) {
        fetchApi()
    } 
})
</script>
<template>
    <PageLoading v-if="country == null" />
    <div v-else class="container mx-auto pt-16 md:px-10 xl:px-0 px-5">
        <RouterLink class="py-1 inline-flex items-center gap-2 rounded shadow-xl dark: dark:bg-dark-card dark:text-white px-5" to="/">
            <i class="pi pi-arrow-left"></i>
            Back
        </RouterLink>
        <div class="flex dark:text-white flex-wrap justify-center xl:justify-between gap-[80px] items-center mt-20">
            <img :src="country?.flags.svg" class="xl:w-1/2 w-full max-h-[450px] " :alt="country?.name?.common || 'country flag'">
            <div class="xl:w-[43%] w-full">
                <!-- Country Name -->
                <h3 class="mb-5 font-bold text-xl md:text-start text-center">{{ country?.name?.common }}</h3>
                <!-- Info -->
                <div class="flex md:text-start text-center justify-between flex-wrap ">
                    <div class="left md:w-1/2 w-full flex flex-col gap-2">
                        <p v-if="country.name" class="font-medium text-base">Native Name: <span class="font-normal ml-2">{{
                            country.name.common
                        }}</span> </p>
                        <p v-if="country.population" class="font-medium text-base">Population: <span
                                class="font-normal ml-2">{{ country.population
                                }}</span></p>
                        <p v-if="country.region" class="font-medium text-base">Region: <span class="font-normal ml-2">{{
                            country.region }}</span>
                        </p>
                        <p v-if="country.subregion" class="font-medium text-base">Sub Region: <span
                                class="font-normal ml-2">{{ country.subregion
                                }}</span> </p>
                        <p v-if="country.capital" class="font-medium text-base">Capital: <span class="font-normal ml-2">{{
                            country?.capital[0] }}</span></p>
                    </div>
                    <div class="right md:w-1/2 w-full flex flex-col gap-2">
                        <p v-if="country.tld" class="font-medium text-base">Top Level Domain:
                            <span class="font-normal ml-2">{{ country?.tld[0]
                            }}</span>
                        </p>
                        <p v-if="country.currencies" class="font-medium text-base">Currencies:
                            <span class="font-normal ml-2">{{ Object.keys(country?.currencies)[0] }}</span>
                        </p>
                        <p v-if="country.languages" class="font-medium text-base">Language:
                            <span class="font-normal" v-for="(l, i) in lang" :key="i">
                                {{ l }},
                            </span>
                        </p>
                    </div>
                </div>
                <!-- Border Countries -->
                <div class="flex mt-3 flex-wrap" v-if="bordersCountry">
                    <h2 class="mr-3 font-medium">Border Countries</h2>
                    <RouterLink 
                    class="shadow-lg dark:bg-dark-card dark:shadow-lg dark:shadow-slate-900 ml-2 py-1 px-3 inline-block mb-2" 
                    v-for="(c, i) in bordersCountry" :key="i" :to="'/' + c">{{ c }},</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>