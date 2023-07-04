<script>
import NavList from './NavList.vue';
export default {
    name: "Header",
    components:{
        NavList
    },
    props: ['name'],
    setup(props) {
        return { props }
    }
}
</script>
<template>
    <header>
     <div class="container flex j-between">
        <div class="logo">
            <img src="../asset/images/logo.svg" alt="logo" />
        </div>
        <nav>
            <!-- <h2>{{ props.name }}</h2> -->
            <NavList />
        </nav>
     </div>
    </header>
</template>
<style scoped>
header {
    padding: 10px 0;
}

</style>
