<template>
    <div class="w-full p-5">
        <Video
            title="Ultimate Unadulterated Gogdog With Myself Tho (no worries darling, I'll just finish myself off) [a musical cabaret in one act]"
            length="9'00&quot;" date="2021">
            <template #video>
                <iframe class="video" src="https://www.youtube.com/embed/r_JpSAtsc80" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe>
            </template>
        </Video>

        <div class="w-full my-5"></div>

        <Video title="gurl world (or rather, don't make me over)" length="9'16&quot;" date="2021">
            <template #video>
                <iframe class="video bg-black"
                    src="https://player.vimeo.com/video/668373995?h=fb4019b01a&title=0&byline=0&portrait=0"
                    frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </template>
        </Video>
    </div>
</template>

<script setup lang="ts">
import Video from "../components/Video.vue";
</script>

<style scoped>
.video {
    aspect-ratio: 16/9;
    width: 100%;
    max-height: 90vh;
}
</style>