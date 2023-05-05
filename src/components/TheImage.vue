<script setup lang="ts">
defineProps({
  url: String,
  routeTo: String,
});
</script>

<template>
  <router-link :to="`${routeTo}`">
    <div
      class="m-2 w-[335px] h-[320px] 2xl:w-[435px] 2xl:h-[425px] rounded-lg overflow-hidden transition-all"
    >
      <img :src="url" class="object-contain" alt="image" />
    </div>
  </router-link>
</template>
