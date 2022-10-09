<template>
    <div class="w-full h-full flex flex-row items-center">
        <div class="w-full p-5 grid gap-4 lg:grid-cols-2">
            <Painting :thumb="gaby" :src="gaby" not-painting title="gaby" />
            <Painting :thumb="angie" :src="angie" not-painting title="angie" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Painting from "../components/Painting.vue";
const gaby = "gaby.jpg";
const angie = "angie.jpg";
</script>