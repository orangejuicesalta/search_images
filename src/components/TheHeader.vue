<script setup lang="ts">
import LikeButton from "./LikeButton.vue";
</script>

<template>
  <div
    class="w-full h-[70px] sm:h-[110px] md:h-[148px] transition-all duration-500 bg-black px-5 py-8 sm:px-[50px] md:px-[100px] lg:px-[230px] md:py-[37px] flex flex-row items-center justify-between"
  >
    <img
      class="h-auto w-[84px] sm:w-[130px] md:w-[185px] transition-all duration-500"
      src="../assets/logo.svg"
      alt="logo"
    />
    <LikeButton />
  </div>
</template>
