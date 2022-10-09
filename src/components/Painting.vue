<template>
    <n-image class="aspect-square max-w-2xl cursor-pointer" :src="thumbUrl" object-fit="cover" preview-disabled
        @click="showModal = true" />
    <n-modal v-model:show="showModal">
        <div class="modal">
            <a :href="imgUrl" target="_blank"><img :src="imgUrl" class="max-h-[70vh] m-auto" /></a>
            <div class="flex-none text-center px-4 pb-2">
                <p v-if="title" class="italic font-bold text-2xl">{{title}}</p>
                <p v-if="!notPainting" class="text-md italic">
                    <span v-if="medium">{{medium}} / </span>
                    <span v-if="size">{{size}} / </span>
                    <span v-if="date">{{date}}</span>
                </p>
            </div>
        </div>
    </n-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    thumb: { type: String, required: true },
    src: { type: String, required: true },
    title: { type: String, default: "Untitled" },
    medium: { type: String, default: "Painting" },
    size: { type: String },
    date: { type: String },
    notPainting: { type: Boolean, default: false },
})

const imgUrl = new URL(`/src/assets/${props.notPainting ? "" : "paintings/"}${props.src}`, import.meta.url).href;
const thumbUrl = new URL(`/src/assets/${props.notPainting ? "" : "paintings/"}${props.thumb}`, import.meta.url).href;

const showModal = ref(false);
</script>

<style>
.modal {
    max-width: 90vw;
    max-height: 90vh;
    background-color: white;
    border-width: 0.5rem;
    border-color: black;
    border-radius: 2rem;
    overflow: hidden;
}

.n-modal-mask {
    background-color: rgb(255, 0, 255, 0.5);
}
</style>