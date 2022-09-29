<template>
    <nav id="navbar">
        <NavbarHeader :active="$route.name === 'home'" />
        <ul>
            <NavbarLinkBase :active="$route.name === 'painting'" link="painting">Paintings</NavbarLinkBase>
            <NavbarLinkBase :active="$route.name === 'video'" link="video">Video/Performance</NavbarLinkBase>
            <NavbarLinkBase :active="$route.name === 'bio'" link="bio">Bio/CV</NavbarLinkBase>
            <NavbarLinkBase :active="$route.name === 'contact'" link="contact">Contact</NavbarLinkBase>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import NavbarLinkBase from "./NavbarLinkBase.vue";
import NavbarHeader from "./NavbarHeader.vue";
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
    min-width: 250px;
    max-width: 250px;
    background-color: #494949;
    transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);
    transform-origin: bottom left;
}

#navbar.active {
    margin-left: -250px;
    transform: rotateY(100deg);
}
</style>