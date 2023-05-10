<script setup>
import { logo } from "../assets";
</script>
<template>
    <nav class="flex justify-between items-center py-5 md:px-0 px-5">
        <img :src="logo" alt="logo" class="cursor-pointer md:w-fit w-[80px] sm:w-[100px]" />
        <ul class="text-white flex gap-5">
            <li class="md:text-base text-sm cursor-pointer hover:border-b transition-all duration-100">Features</li>
            <li class="md:text-base text-sm cursor-pointer hover:border-b transition-all duration-100">Team</li>
            <li class="md:text-base text-sm cursor-pointer hover:border-b transition-all duration-100">Sign In</li>
        </ul>
    </nav>
</template>