<template>
    <div v-if="shrink" :class="classes">
        <div class="h-1 m-1.5 rounded bg-white" />
        <div class="h-1 m-1.5 rounded bg-white" />
        <div class="h-1 m-1.5 rounded bg-white" />
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
    shrink: { type: Boolean, default: false },
    menuOpen: { type: Boolean, default: false },
})

const classes = computed(() => {
    const base = "burger h-8 p-1 my-1";
    if (props.menuOpen) return base + " w-full";
    else return base + " w-12";
});
</script>

<style scoped>
.burger {
    transition: width 0.3s;
}

.burger:hover {
    animation: icon-shadow 1s ease-in-out infinite alternate;
}

/* .burger:hover div {
    background-color: magenta;
} */
</style>