<template>
    <slot name="video" />
    <p v-if="title" class="italic font-bold text-xl">{{title}}</p>
    <p class="text-md italic">
        <span v-if="medium">{{medium}} / </span>
        <span v-if="length">{{length}} / </span>
        <span v-if="date">{{date}}</span>
    </p>
</template>

<script setup lang="ts">
defineProps({
    title: { type: String },
    medium: { type: String, default: "Video (Single Channel)" },
    length: { type: String },
    date: { type: String },
})
</script>