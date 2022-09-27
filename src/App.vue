<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="wrapper overflow-hidden w-full h-screen">
    <Navbar />
    <div id="content" class="w-full p-5 flex flex-col items-center overflow-auto">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
}

#content {
  transition: all 0.3s;
}
</style>