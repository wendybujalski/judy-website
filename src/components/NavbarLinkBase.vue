<template>
    <li v-if="shrink" class="pb-2">
        <router-link :to="link" :class="iconClasses">
            <Icon :name="link" />
        </router-link>
    </li>
    <li v-else :class="active">
        <router-link :to="link" :class="classes">
            <slot />
        </router-link>
    </li>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import Icon from './Icon.vue';

const props = defineProps({
    link: { type: String, default: "/" },
    active: { type: Boolean, default: false },
    shrink: { type: Boolean, default: false },
})

const baseClasses = "text-lg m-0 font-semibold block text-white";

const iconClasses = computed(() => {
    return baseClasses + " p-2";
})

const classes = computed(() => {
    return "navlink p-3 " + baseClasses +
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