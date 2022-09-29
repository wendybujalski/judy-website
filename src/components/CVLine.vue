<template>
    <div :class="classes">
        <p v-if="leftText" class="pr-4">{{leftText}}</p>
        <p>
            <slot />
        </p>
    </div>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { useWindowSize } from 'vue-window-size';

const props = defineProps({
    leftText: { type: String },
    text: { type: String },
    bold: { type: Boolean, default: false },
    italic: { type: Boolean, default: false },
    topSpace: { type: Boolean, default: false },
})

const width = useWindowSize().width;

const classes = computed(() => {
    return "flex flex-row w-full justify-between whitespace-nowrap overflow-hidden" +
        (width.value > 1180 ?
            (props.bold ? " font-bold text-xl" : " text-base") :
            (props.bold ? " font-bold text-md" : " text-xs")
        ) +
        (props.italic ? " italic font-bold" : "") +
        (props.topSpace ? " mt-4" : "");
})
</script>