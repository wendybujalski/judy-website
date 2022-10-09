<template>
    <div class="w-full p-5 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Painting v-for="painting in paintings" :src="painting.src" :thumb="painting.thumb" :title="painting.title"
            :medium="painting.medium" :size="painting.size" :date="painting.date" />
    </div>
</template>

<script setup lang="ts">
import Painting from '@/components/Painting.vue';

const paintings = [
    {
        src: "ttmtp1.jpg", thumb: "thumbs/ttmtp2.jpg",
        title: "the performance(s) of self 1 (or rather did you know the original barbie dream house was a yellow cardboard mid-century deal?, or rather rather some people thrive and bloom, living life in a living room...)",
        medium: "Mixed media and LED on canvas", size: "60 x 78 inches", date: "2021",
    },
    {
        src: "ttmtp2.jpg", thumb: "thumbs/ttmtp1.jpg",
        title: "the performance(s) of self 2 (or rather did you know the original barbie dream house was a yellow cardboard mid-century deal?, or rather rather some people thrive and bloom, living life in a living room...)",
        medium: "Mixed media and LED on canvas", size: "60 x 78 inches", date: "2021",
    },
    {
        src: "ttmtp3.jpg", thumb: "thumbs/ttmtp3.jpg",
        title: "Pool Floatie #1",
        medium: "Mixed media", size: "11 x 14 x 4 inches", date: "2021",
    },
    {
        src: "ttmtp4.jpg", thumb: "thumbs/ttmtp4.jpg",
        title: "the perfect accessory for the perfect day (or rather, is it the perfect day for the perfect accessory?)",
        medium: "Mixed media and a necklace belonging to the artist's maternal grandmother on canvas",
        size: "30 x 24 inches", date: "2021",
    },
    {
        src: "eg1.jpg", thumb: "thumbs/eg1.jpg",
        title: "Extraterrestrigurl Gogdog 7",
        medium: "Mixed media", size: "11 x 9 inches", date: "2020",
    },
    {
        src: "eg2.jpg", thumb: "thumbs/eg2.jpg",
        title: "Extraterrestrigurl Gogdog 10",
        medium: "Mixed media", size: "13.5 x 13.5 inches", date: "2020",
    },
    {
        src: "eg3.jpg", thumb: "thumbs/eg3.jpg",
        title: "Extraterrestrigurl Gogdog 4",
        medium: "Mixed media", size: "8.5 x 22 inches", date: "2020",
    },
    {
        src: "p1.jpg", thumb: "thumbs/p1.jpg",
        title: "The Big Gogdog",
        medium: "Mixed media with embedded LED lighting and video", size: "7 x 9 x 5 feet", date: "2021",
    },
    {
        src: "p2.jpg", thumb: "thumbs/p2.jpg",
        title: "And right in the thik of it, seemingly ordinary organisms are living seemingly vivacious lives",
        medium: "Mixed media on panel", size: "12 x 15 inches", date: "2022",
    },
    {
        src: "p3.jpg", thumb: "thumbs/p3.jpg",
        title: "I'm Dead Inside (But I'm Laughing About It)",
        medium: "Vintage fabric, acrylic paint, spray paint, marker, PVA glue, wood, cardboard, metal grommets, fringe, string, and a dead man's Mardi Gras beads",
        size: "16 x 23 inches", date: "2021",
    },
    {
        src: "p4.jpg", thumb: "thumbs/p4.jpg",
        title: "Just a T Gurl From Brooklyn",
        medium: "Mixed media and undergarments worn by the artist during the creation of the painting on cavnas",
        size: "48 x 58 inches", date: "2019",
    },
    {
        src: "p5.jpg", thumb: "thumbs/p5.jpg",
        title: "Self-Portrait in Green (But I Never Wear Green)",
        medium: "Insulation foam, fabric, wood, PVA glue, fringe, acrylic paint, spray paint, plaster, staples, plastic ribbon, tin foil, and synthetic hair",
        size: "16 x 22 inches", date: "2021",
    },
];
</script>

<style scoped>

</style>