<template>
    <section v-show="!store.loading" id="map" class="flex flex-col flex-grow">
        <LMap v-if="store?.ipInfo" ref="map" class="flex-grow " :zoom="zoom"
            :center="[store.ipInfo?.latitude, store.ipInfo?.longitude]">
            <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                layer-type="base" name="OpenStreetMap" />
            <LMarker :lat-lng="[store.ipInfo?.latitude, store.ipInfo?.longitude]" />
        </LMap>
        <div v-else class="flex flex-col flex-grow">Loading</div>
    </section>
</template>
<script setup>
import { useStore } from "../store/store";
import { ref } from "vue";
const zoom = ref(6);
const store = useStore();
onMounted(() => store.currentApi());
</script>