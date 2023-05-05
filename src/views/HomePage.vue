<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useImagesStore } from "../stores/index";
// import { useIntersectionObserver } from "@vueuse/core";
import TheImage from "../components/TheImage.vue";

const searchValue = ref("");
const imagesStore = useImagesStore();
const imageContainer = ref<HTMLElement | null>(null);

// useIntersectionObserver(
//   imageContainer,
//   async () => {
//     await imagesStore.getImagesOnscroll();
//   },
//   { threshold: 0.8 }
// );

onMounted(async () => {
  if (imagesStore.images.length === 0) {
    await imagesStore.getImages();
  }
});
</script>

<template>
  <main>
    <div
      class="relative h-[230px] md:h-[250px] lg-[250px] xl:h-[250px] 2xl:h-[250px]"
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <img
        class="object-cover w-full h-full"
        src="../assets/background_img.svg"
        alt="background image"
      />
      <div
        class="absolute max-w-[866px] top-1/2 transform -translate-y-1/2 left-[22px] right-[22px] mx-auto bg-white h-[70px] flex flex-row py-5 px-[25px]"
      >
        <input
          placeholder="Поиск"
          class="w-full focus:outline-none"
          type="text"
          v-model="searchValue"
          @keyup.enter="imagesStore.searchImages(searchValue)"
        />
        <button class="ml-3" @click="imagesStore.searchImages(searchValue)">
          <img src="../assets/icons/search.svg" alt="search icon" />
        </button>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <section
        v-if="!imagesStore.loading"
        ref="imageContainer"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 my-[45px] md:my-[100px]"
      >
        <div v-for="(image, idx) in imagesStore.images" :key="idx">
          <TheImage
            :route-to="`/photos/${image.id}`"
            :url="image.urls.regular"
          />
        </div>
      </section>
      <div class="mt-16" v-else>
        <img
          class="animate-spin"
          src="../assets/icons/loading.svg"
          alt="loading"
        />
      </div>
    </div>
  </main>
</template>
