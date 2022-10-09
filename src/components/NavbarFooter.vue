<template>
    <div :class="classes">
        <Icon name="insta" :link="INSTAGRAM_URL" growOnHover />
        <Icon name="email" :link="EMAIL" copy-instead-of-link growOnHover />
    </div>
</template>

<script lang="ts" setup>
import Icon from "./Icon.vue";
import { INSTAGRAM_URL, EMAIL } from "@/main";
import { computed } from "@vue/reactivity";

const props = defineProps({
    shrink: { type: Boolean, default: false },
});

const classes = computed(() => {
    const base = "absolute bottom-0 w-full flex items-center justify-around"
    if (props.shrink) return base + " py-2 flex-col h-36";
    return base + " py-8 flex-row h-24";
})
</script>