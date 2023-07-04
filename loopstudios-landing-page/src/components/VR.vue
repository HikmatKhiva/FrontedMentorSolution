<script>
export default {
    name: "VR",
}
</script>
<template>
    <section class="vr">
        <img src="../asset/images/desktop/image-interactive.jpg" alt="interactive">
        <div class="vr-card">
            <h2>The leader in interactive vr</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptates natus totam porro? Eum soluta cumque ipsum reprehenderit, explicabo ut minima modi debitis sint aperiam quo repudiandae ipsam at deserunt.</p>
        </div>
    </section>
</template>
<style scoped>
.vr {
    position: relative;
    padding-bottom: 20px;
}
.vr-card {
    background-color: #fff;
  
    right: 150px;
    bottom: 0px;
}

.vr-card h2 {
    text-transform: uppercase;
    margin-bottom: 10px;
}
p {
    color: hsl(0, 0%, 55%);
}

</style>