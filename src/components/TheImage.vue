<script setup lang="ts">
defineProps({
  url: String,
  routeTo: String,
});
</script>

<template>
  <router-link :to="`${routeTo}`">
    <div
      class="m-2 w-[335px] 2xl:w-[435px] rounded-lg overflow-hidden transition-all"
    >
      <img :src="url" class="object-contain" alt="image" />
    </div>
  </router-link>
</template>
