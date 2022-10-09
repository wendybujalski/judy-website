<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <n-notification-provider>
        <n-dialog-provider>
          <div class="wrapper overflow-hidden w-full h-screen">
            <Navbar />
            <div id="content" class="w-full flex flex-col items-center overflow-auto">
              <RouterView />
            </div>
          </div>
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-loading-bar-provider>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { RouterView, useRouter } from "vue-router";
import Navbar from "./components/Navbar.vue";

const router = useRouter();
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
}
</style>