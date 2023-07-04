<script>
import { navList } from '../setting/data';
export default {
    data(){
        return {
            isMobileOpen:false
        }
    },
    setup(){
        return {navList}
    }
}
</script>

<template>
    <ul class="nav-list" :class="{'nav-active':isMobileOpen}">
        <button @click="isMobileOpen=!isMobileOpen" class="mobile-btn close">
            <i class="fa-sharp fa-solid fa-circle-xmark"></i>
        </button>
        <li v-for="item in navList" :key="item.id" class="nav-item">
            <a href="" @click="isMobileOpen=!isMobileOpen" class="nav-link">{{ item.title }}</a>
        </li>
    </ul>
    <button class="mobile-btn" @click="isMobileOpen=!isMobileOpen">
        <i v-show="!isMobileOpen" class="fa-solid fa-bars"></i>
    </button>
</template>

<style scoped>
ul {
    list-style: none;
    gap: 15px;
}
.mobile-btn {
    font-size: 20px;
    background-color: transparent;
    border: none;
    color: white;
}
.mobile-btn.close {
    position: absolute; 
    right: 10px;
    top: 10px;
}
.nav-link  {
    text-decoration: none;
    color: white;
}
</style>