<template>
    <img class="flex-none object-cover aspect-square cursor-pointer" :src="imgUrl">
</template>

<script setup lang="ts">
const props = defineProps({
    src: { type: String, required: true }
})

const imgUrl = new URL(`/src/assets/paintings/${props.src}`, import.meta.url).href;
</script>