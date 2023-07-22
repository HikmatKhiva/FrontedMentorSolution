<template>
    <div class="flex min-h-screen flex-col">
        <Header />
        <main class="flex-grow flex flex-col">
            <slot />
        </main>
    </div>
</template>

<script setup>
import Header from "../components/Header.vue"
</script>
