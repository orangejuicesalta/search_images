<script setup lang="ts">
import { useImagesStore } from "../stores";
import TheImage from "../components/TheImage.vue";

const store = useImagesStore();
</script>

<template>
  <main class="w-full">
    <h1 class="text-center text-4xl 2xl:text-6xl my-10 2xl:my-20">Избранное</h1>
    <div class="flex items-center justify-center">
      <section
        ref="imageContainer"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 my-[45px] md:my-[100px]"
      >
        <div v-for="(image, idx) in store.likedImages" :key="idx">
          <TheImage
            :route-to="`/photos/${image.id}`"
            :url="image.urls.regular"
          />
        </div>
      </section>
    </div>
  </main>
</template>
