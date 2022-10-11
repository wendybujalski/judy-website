<template>
    <n-carousel autoplay :interval="3300" :show-dots="false" :touchable="false" effect="fade"
        :transition-style="transitionStyle">
        <img v-for="slide in 5" class="carousel-img" :src="urls[slide - 1]">
    </n-carousel>
</template>

<script lang="ts" setup>
const transitionStyle = { transitionDuration: '1500ms' };
const urls: Array<string> = [];
for (let i = 1; i < 6; i++) {
    // TODO - figure out build tools for this part
    urls.push(new URL(`/src/assets/indexcarousel/${i}.jpg`, import.meta.url).href);
}
</script>
  
<style scoped>
.carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>