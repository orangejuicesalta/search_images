<script setup lang="ts">
import LikeButton from "./LikeButton.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div
    class="w-full h-[70px] sm:h-[110px] md:h-[148px] transition-all duration-500 bg-black px-5 py-8 sm:px-[50px] md:px-[100px] lg:px-[230px] md:py-[37px] flex flex-row items-center justify-between"
    :class="{ ' sm:h-[80px] md:h-[80px]': route.params.id ?? false }"
  >
    <img
      class="h-auto w-[84px] sm:w-[130px] md:w-[185px] transition-all duration-500"
      :class="{ ' sm:w-[112px] md:w-[112px]': route.params.id ?? false }"
      src="../assets/logo.svg"
      alt="logo"
    />
    <section class="flex flex-row items-center justify-center gap-5">
      <div
        v-if="route.name !== 'home'"
        @click="$router.push({ name: 'home' })"
        class="cursor-pointer flex flex-row items-center justify-center gap-2.5"
      >
        <img src="../assets/icons/search_white.svg" alt="search" />
        <p class="hidden text-white md:block text-lg font-normal">Поиск</p>
      </div>
      <div
        @click="$router.push({ name: 'favourites' })"
        v-if="!route.fullPath.includes('favourites')"
        class="cursor-pointer flex flex-row items-center justify-center gap-2.5"
      >
        <LikeButton />
        <p class="hidden text-white md:block text-lg font-normal">Избранное</p>
      </div>
    </section>
  </div>
</template>
