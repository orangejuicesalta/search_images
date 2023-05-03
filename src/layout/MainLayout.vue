<script setup lang="ts">
import TheHeader from "../components/TheHeader.vue";
</script>

<template>
  <div class="h-screen w-screen">
    <TheHeader />
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>
