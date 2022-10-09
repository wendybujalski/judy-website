<template>
    <router-link to="/">
        <div v-if="shrink" id="navbar-header-sm" class="text-white p-2">
            <h1 :class=" navItemSm + ' text-3xl'">JG</h1>
        </div>
        <div v-else id="navbar-header" class="text-white p-2">
            <h1 :class=" navItem + ' text-4xl'">Judy Giera</h1>
            <p :class="navItem + ' text-[1.4rem]'">(Not So Fine Art)</p>
        </div>
    </router-link>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
    active: { type: Boolean, default: false },
    shrink: { type: Boolean, default: false },
})

const navItem = computed(() => {
    return "navbar-item whitespace-nowrap" +
        (props.active ? " animate" : "");
});

const navItemSm = computed(() => {
    return "navbar-item whitespace-nowrap" +
        (props.active ? " glow" : "");
});
</script>

<style scoped>
#navbar-header,
#navbar-header-sm {
    font-family: 'Delius Unicase', cursive;
}

#navbar-header:hover *,
#navbar-header-sm:hover * {
    color: yellow;
}

.animate {
    animation: glow_pink 1s ease-in-out infinite alternate, wobble 2s linear infinite alternate;
}

.glow {
    animation: glow_pink 1s ease-in-out infinite alternate;
}
</style>