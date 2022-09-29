<template>
    <li :class="active">
        <router-link :to="link" :class="classes">
            <slot />
        </router-link>
    </li>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';

const props = defineProps({
    link: { type: String, default: "/" },
    active: { type: Boolean, default: false }
})

const classes = computed(() => {
    return "navlink text-lg m-0 p-3 font-semibold block text-white" +
        (props.active ? " animation" : "");
})
</script>

<style scoped>
.navlink {
    transition: font-size 0.1s;
    transition-timing-function: ease-in-out;
}

.navlink:hover {
    font-size: 1.4rem;
    font-weight: 900;
    animation: glow_yellow 1s ease-in-out infinite alternate;
}

.animation {
    font-size: 1.4rem;
    font-weight: 900;
    animation: glow_yellow 1s ease-in-out infinite alternate;
}
</style>