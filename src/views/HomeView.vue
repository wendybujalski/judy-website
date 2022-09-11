<template>
  <div class="wrapper">
    <Navbar />
    <MainBox />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import MainBox from '@/components/MainBox.vue';
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
}
</style>