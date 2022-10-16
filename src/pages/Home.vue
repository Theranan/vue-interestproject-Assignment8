<template>
 <div>
    <navbar />
    <section class="home">

<div class="image">
    <img src="images/profile.png" alt="">
</div>

<div class="content">
    <h3>{{name}}</h3>
    <span>{{motto}}</span>
    <p>{{content}}</p>
    <a href="https://www.izotope.com/en/shop/rx-10-advanced.html" class="btn"> Buy now <i class="fas fa-user"></i> </a>
</div>

</section>
 </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
    components: { Navbar },
    data() {
        return {
            name: 'iZotope RX10',
            motto: 'The smart solution for clear audio',
            content: "The smart solution for clear audio, Things break. So does audio. Recorded sound is rarely perfect— in fact, it's often in really bad shape. That's why you need RX, the industry standard for audio repair that helps restore, clean up, and improve recordings in post-production, music, and content creation.",
        }
    }
}
</script>

<style>

</style>