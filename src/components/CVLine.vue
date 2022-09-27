<template>
    <div :class="classes">
        <p v-if="leftText">{{leftText}}</p>
        <p>
            <slot />
        </p>
    </div>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
    leftText: { type: String },
    text: { type: String },
    bold: { type: Boolean, default: false },
    italic: { type: Boolean, default: false },
    topSpace: { type: Boolean, default: false },
})

const classes = computed(() => {
    return "flex flex-row w-full justify-between" +
        (props.bold ? " font-bold text-xl" : " text-base") +
        (props.italic ? " italic font-bold" : "") +
        (props.topSpace ? " mt-4" : "");
})
</script>