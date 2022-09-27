<template>
    <router-link to="/">
        <div class="navbar-header text-white p-2">
            <h1 ref="judy" :class=" navItem + ' text-4xl'">Judy Giera</h1>
            <p :class="navItem + ' text-[1.4rem]'">(Not So Fine Art)</p>
        </div>
    </router-link>
</template>

<style scoped>
.navbar-header {
    font-family: 'Delius Unicase', cursive;
}

.navbar-header:hover * {
    animation: glow 1s ease-in-out infinite alternate, wobble 2s linear infinite alternate;
}

.animate {
    animation: glow 1s ease-in-out infinite alternate, wobble 2s linear infinite alternate
}
</style>

<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';

const props = defineProps({
    active: { type: Boolean, default: false },
})

const navItem = computed(() => {
    return "navbar-item whitespace-nowrap" +
        (props.active ? " animate" : "");
})

const judy = ref();

onMounted(() => {
    const cw = judy.value.clientWidth;
});

</script>