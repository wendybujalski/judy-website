<template>
    <div :class="classes">
        <span class="pr-1">{{text}}</span>
        <n-tooltip v-if="copyInsteadOfLink" trigger="click">
            <template #trigger>
                <span class="font-bold animate cursor-pointer" @click="copyLink">{{linkText}}<img v-if="decorator"
                        :src="decoratorUrl" class="decorator w-12 pl-2" /></span>
            </template>
            <span>Email Copied!</span>
        </n-tooltip>
        <a v-else :href="link" target="_blank" class="font-bold animate cursor-pointer">{{linkText}}<img
                v-if="decorator" :src="decoratorUrl" class="decorator w-12 pl-2" /></a>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    text: { type: String, required: true },
    link: { type: String, required: true },
    linkText: { type: String, required: true },
    copyInsteadOfLink: { type: Boolean, default: false },
    decorator: { type: String },
});

const copyLink = () => {
    navigator.clipboard.writeText(props.linkText);
};

// TODO - figure out build tools for this part
const decoratorUrl = new URL(`/src/assets/${props.decorator}`, import.meta.url).href;

const classes = computed(() => {
    let base = "leading-[3rem] text-left w-full pb-4 flex whitespace-nowrap px-5";
    if (windowWidth.value > 600) return "text-3xl flex-row items-center " + base;
    else if (windowWidth.value > 500) return "text-2xl flex-row items-center " + base;
    else return "text-xl flex-col items-start " + base;
});

const windowWidth = ref(0);
const resize = () => {
    windowWidth.value = window.innerWidth;
}
onMounted(() => {
    window.addEventListener("resize", resize);
    resize();
});
onUnmounted(() => {
    window.removeEventListener("resize", resize);
});
</script>

<style scoped>
.animate:hover {
    color: magenta;
    animation: glow_yellow 1s ease-in-out infinite alternate;
}

.decorator {
    display: none;
    animation: wobblemore 0.2s linear infinite alternate;
}

.animate:hover .decorator {
    display: inline;
}
</style>
    