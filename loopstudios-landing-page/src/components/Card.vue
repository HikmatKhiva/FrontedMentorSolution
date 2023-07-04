<script>
export default {
    name:"Card",
    props:['item'],
    setup(props){
        const {item} = props
        return {item}
    }
}
</script>

<template>
    <div class="creation-card">
        <img :src="item.img" alt="deep-earth">
        <h3>{{ item.title }}</h3>
    </div>
</template>

<style scoped>
.creation-card {
    position: relative;
    cursor: pointer;
}

.creation-card img {
    width: 100%;
    height: 100%;
    display: block;
}

.creation-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: #cccccc7f;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.2s;
}

.creation-card:hover::before {
    opacity: 1;
}

.creation-card:hover>h3 {
    color: black;
}

.creation-card h3 {
    position: absolute;
    bottom: 30px;
    color: white;
    left: 50px;
    width: 50%;
    font-size: 28px;
    letter-spacing: 2px;
    font-weight: 400;
}
</style>