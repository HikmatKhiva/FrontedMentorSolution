<template>
    <div class="bg-white absolute md:static lg:translate-y-20 left-1/2 md:-translate-x-0 -translate-x-1/2 shadow-md font-base md:flex-nowrap flex-wrap flex gap-5 w-[90%] xl:w-[70%]  mx-auto p-5 py-5 rounded-lg">
        <div class="flex-grow w-full text-center lg:border-r border-gray">
            <h3 class="uppercase text-xs mb-1 text-gray">IP ADDRESS</h3>
            <p class="font-bold text-sm xl:text-base">{{ store?.ipInfo ? store?.ipInfo?.ip : "Loading" }}</p>
        </div>
        <div class="flex-grow w-full text-center lg:border-r border-gray px-5">
            <h3 class="uppercase text-xs mb-1 text-gray">LOCATION</h3>
            <p class="font-bold text-sm xl:text-base">{{ store?.ipInfo ? `${store?.ipInfo?.country_name},
                            ${store?.ipInfo?.city}` : "Loading" }}</p>
        </div>
        <div class="flex-grow w-full text-center lg:border-r border-gray px-5">
            <h3 class="uppercase text-xs mb-1 text-gray">TIMEZONE</h3>
            <p class="font-bold text-sm xl:text-base">{{ store?.ipInfo ? store?.ipInfo?.timezone : "Loading" }}</p>
        </div>
        <div class="flex-grow w-full text-center px-5">
            <h3 class="uppercase text-xs mb-1 text-gray">ISP</h3>
            <p class="font-bold text-sm xl:text-base">{{ store?.ipInfo ? store?.ipInfo?.org : "Loading" }}</p>
        </div>
    </div>
</template>
<script setup>
import { useStore } from "../store/store";
const store = useStore()
</script>