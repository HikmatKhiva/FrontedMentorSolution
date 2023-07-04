<script>
import { creations } from '../setting/data'
import Card from './Card.vue'
export default {
    name: "Creation",
    components: {
        Card
    },
    setup() {
        return { creations }
    }
}
</script>
<template>
    <div class="flex-between py-20">
        <h2>OUR CREATIONS</h2>
        <button> SEE ALL </button>
    </div>
    <div class="flex flex-wrap creations">
        <Card v-for="item in creations" :key="item.id" :item="item" />
    </div>
</template>
<style scoped>
.py-20 {
    padding: 20px 0;
} 
.creations {
    gap: 20px;
    padding: 30px 0px;
}

.flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

button {
    font-size: 10px;
    width: 100px;
    padding: 5px;
    font-family: 'Roboto';
    background-color: transparent;
    border: 1px solid black;
}

button:hover {
    background-color: black;
    color: white;
}
</style>