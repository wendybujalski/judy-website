<template>
    <a :href="WENDY_URL" target="_blank" :class="wendyClasses">
        <img :src="wendyUrl" class="w-12 pr-2" ref="wendyimg" />Website built by Wendy Wildshape
    </a>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { WENDY_URL } from "@/main";

// TODO - figure out build tools for this part
const wendyUrl = new URL("/assets/wildshape.png", import.meta.url).href;
const wendyimg = ref();
const wendyFlash = ref(0);
const wendyFlashState = ref(false);
const flashing = () => {
    if (!wendyimg.value || !wendyimg.value.style) return;

    if (wendyFlashState.value) wendyimg.value.style.filter = "invert(1)";
    else wendyimg.value.style.filter = "invert(0)";
    wendyFlashState.value = !wendyFlashState.value;

    wendyFlash.value = setTimeout(flashing, 100 + (Math.random() * 500));
};
const wendyClasses = computed(() => {
    const base = "wendy flex flex-row items-center leading-10 pr-4";
    if (windowWidth.value > 420) return base + " text-[2rem]";
    else return base + " text-xl";
});
const windowWidth = ref(0);
const resize = () => {
    windowWidth.value = window.innerWidth;
}
onMounted(() => {
    wendyFlash.value = setTimeout(flashing, 500);
    window.addEventListener("resize", resize);
    resize();
});
onUnmounted(() => {
    clearTimeout(wendyFlash.value);
    window.removeEventListener("resize", resize);
});
</script>

<style scoped>
.wendy {
    position: absolute;
    font-family: 'Tangerine', cursive;
    bottom: 0;
    right: 0;
    white-space: nowrap;
}

.wendy:hover {
    animation: rainbow 0.5s infinite, glow_pink 1s infinite;
}

.wendy img {
    display: none;
}

.wendy:hover img {
    display: inline;
    animation: rotate 0.4s infinite step-end;
}
</style>