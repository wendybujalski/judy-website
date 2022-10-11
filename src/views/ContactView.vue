<template>
    <div class="w-full h-full flex flex-col pt-5 pb-2 overflow-y-hidden overflow-x-auto">
        <ContactLink copy-instead-of-link text="All Inquiries: " :link="`mailto:${EMAIL}`" :link-text="EMAIL"
            decorator="gabyhead.png" />
        <ContactLink text="Instagram: " :link="INSTAGRAM_URL" :link-text="`@${INSTAGRAM}`" decorator="angiehead.png" />
        <div class="w-full text-left grow relative">
            <Credit />
        </div>
    </div>
</template>

<script setup lang="ts">
import ContactLink from "../components/ContactLink.vue";
import { EMAIL, INSTAGRAM, INSTAGRAM_URL } from "@/main";
import Credit from "../components/Credit.vue";
</script>
