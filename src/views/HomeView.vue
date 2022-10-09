<template>
    <n-carousel autoplay :interval="3300" :show-dots="false" :touchable="false" effect="fade"
        :transition-style="transitionStyle">
        <img v-for="slide in 5" class="carousel-img" :src="baseUrl + slide + '.jpg'">
    </n-carousel>
</template>

<script lang="ts" setup>
const baseUrl = new URL(`/src/assets/indexcarousel/`, import.meta.url).href;
const transitionStyle = { transitionDuration: '1500ms' };
</script>
  
<style scoped>
.carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>