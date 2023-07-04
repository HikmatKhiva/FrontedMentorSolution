<script>
export default {

}
</script>
<template>
    <footer class="footer">
        <div class="container">

            <div class="footer-content flex j-between">
                <div class="footer-top">
                    <img class="footer-logo" src="../asset/images/logo.svg" alt="logo">
                    <ul class="footer-nav flex">
                        <li><a href="#">About</a> </li>
                        <li><a href="#">Careers</a> </li>
                        <li><a href="#">Events</a> </li>
                        <li><a href="#">Products</a> </li>
                        <li> <a href="#">Support</a> </li>
                    </ul>
                </div>
                <div class="footer-bottom">
                    <div class="icons">
                        <a href="">
                            <img src="../asset/images/icon-facebook.svg" alt="facebook">
                        </a>
                        <a href="">
                            <img src="../asset/images/icon-twitter.svg" alt="twitter">
                        </a>
                        <a href="">
                            <img src="../asset/images/icon-pinterest.svg" alt="pinterest">
                        </a>
                        <a href="">
                            <img src="../asset/images/icon-instagram.svg" alt="instagram">
                        </a>
                    </div>
                    <p> @ 2021 loopstudios All rights reserved</p>
                </div>
            </div>


        </div>
    </footer>
</template>
<style scoped>
.footer {
    margin-top: 30px;
    background-color: black;
    padding: 40px 20px;
    color: white;
}

.footer_img {
    display: flex;
    justify-content: space-between;
}

.footer-logo {
    width: 200px;
}

.icons a img {
    padding: 8px;
}

ul {
    color: white;
    list-style-type: none;
    gap: 20px;
    font-family: 'Roboto';
}

ul a {
    text-decoration: none;
    color: white;
}

p {
    color: #484848;
    list-style-type: none;
    font-family: 'Roboto';
}
</style>