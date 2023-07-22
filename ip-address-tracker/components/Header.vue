<template>
    <header class="bg-hero py-10 bg-no-repeat bg-cover relative z-[999999]">
        <div class="container mx-auto">
            <h1 class="text-center flex items-center justify-center text-2xl lg:text-3xl text-white">
                <Icon @click="store.currentApi" name="material-symbols:location-on-rounded" class="mr-1 text-4xl" />
                IP Address Tracker
            </h1>
            <form @submit.prevent="store.findApiAddress" class="h-12 w-[90%] lg:w-[500px] flex mx-auto my-5 rounded-xl">
                <input type="text" @input="store.handleSearch" :value="store.search"
                    :placeholder="`${store.ipInfo ? store.ipInfo.ip : 'Search for any IP address'}`"
                    class="bg-white flex-grow text-base lg:text-xl outline-none rounded-l-xl px-2 lg:px-5">
                <button @click="store.findApiAddress" class="bg-black px-5 rounded-r-xl hover:opacity-80">
                    <Icon name="raphael:arrowright2" color="white" class="text-2xl" />
                </button>
            </form>
            <HeaderInfo />
        </div>
    </header>
</template>
<script setup>
import { useStore } from "../store/store";
const store = useStore();
</script>
