<template>
    <nav id="navbar" :class="classes">
        <Burger :shrink="shrink" :menu-open="menuOpen" @click="toggleMenu" />
        <div class="flex-none">
            <NavbarHeader :shrink="shrink && !menuOpen" active />
            <ul>
                <NavbarLinkBase :shrink="shrink && !menuOpen" :active="$route.name === 'painting'" link="painting">
                    Paintings</NavbarLinkBase>
                <NavbarLinkBase :shrink="shrink && !menuOpen" :active="$route.name === 'video'" link="video">
                    Video/Performance</NavbarLinkBase>
                <NavbarLinkBase :shrink="shrink && !menuOpen" :active="$route.name === 'bio'" link="bio">Bio/CV
                </NavbarLinkBase>
                <NavbarLinkBase :shrink="shrink && !menuOpen" :active="$route.name === 'contact'" link="contact">Contact
                </NavbarLinkBase>
            </ul>
        </div>
        <div class="grow relative">
            <NavbarFooter :shrink="shrink && !menuOpen" />
        </div>
    </nav>
</template>

<script setup lang="ts">
import NavbarLinkBase from "./NavbarLinkBase.vue";
import NavbarHeader from "./NavbarHeader.vue";
import NavbarFooter from "./NavbarFooter.vue";
import Burger from "./Burger.vue";
import { onMounted, onUnmounted, ref, computed } from "vue";

const shrink = ref(false);
const menuOpen = ref(false);
const shrinkResize = () => {
    const w = window.innerWidth;
    if (w < 768) {
        shrink.value = true;
    } else {
        shrink.value = false;
        menuOpen.value = false;
    }
};
const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
    console.log(menuOpen.value);
};
const classes = computed(() => {
    const base = "flex flex-col flex-none overflow-hidden";
    if (shrink.value && !menuOpen.value) return base + " w-14";
    return base + " w-64";
});

onMounted(() => {
    window.addEventListener("resize", shrinkResize);
    shrinkResize();
});

onUnmounted(() => {
    window.removeEventListener("resize", shrinkResize);
});
</script>

<style scoped>
a,
a:hover,
a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

#navbar {
    background-color: #494949;
    transition: all 0.3s ease-in-out;
    transform-origin: bottom left;
}

#navbar.active {
    margin-left: -250px;
    transform: rotateY(100deg);
}
</style>