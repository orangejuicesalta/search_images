<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { IImageData } from "../types/types";
import { useImagesStore } from "../stores";
import LikeButton from "../components/LikeButton.vue";

const store = useImagesStore();
const route = useRoute();
let user = ref<IImageData | undefined>(undefined);
const id = route.params.id;
let isLiked = ref(store.isLiked(id as string));

watch(
  () => store.likedImages.length,
  () => {
    isLiked.value = store.isLiked(id as string);
  }
);

onMounted(async () => {
  user.value = await store.getImageInfo(id as string);
});
</script>

<template>
  <div v-if="!store.loading" class="relative">
    <main class="my-10 mx-5 xl:mx-52 2xl:mx-[220px]">
      <section
        class="mb-8 flex flex-row items-center justify-between 2xl:mx-36"
      >
        <div class="flex flex-row items-center justify-center gap-2.5">
          <div class="w-12 2xl:w-[55px] border border-white rounded-lg">
            <img
              class="rounded-lg"
              :src="user?.user.profile_image?.medium"
              alt="profile image"
            />
          </div>

          <div class="flex flex-col">
            <p class="text-lg font-normal text-black 2xl:text-white">
              {{ user?.user.name }}
            </p>
            <p class="text-sm font-normal text-[#BDBDBD] 2xl:text-white">
              @{{ user?.user.username ?? "" }}
            </p>
          </div>
        </div>
        <div class="flex flex-row items-center justify-center gap-4">
          <button
            @click="store.toggleLike(user?.id!)"
            class="p-2.5 w-fit bg-white rounded-2 shadow-custom rounded-lg"
          >
            <LikeButton :is-black="true" :liked="isLiked" />
          </button>
          <button
            class="p-2.5 bg-[#FFF200] border border-[#FFF200] rounded-lg shadow-custom flex flex-row items-center justify-center gap-2.5"
          >
            <img src="../assets/icons/download.svg" alt="download" />
            <p class="hidden text-xl font-normal text-black lg:block">
              Downloand
            </p>
          </button>
        </div>
      </section>

      <section class="w-full flex items-center justify-center">
        <div class="relative">
          <img class="rounded-lg" :src="user?.urls.regular" alt="image" />
          <img
            class="absolute bottom-2 right-2 2xl:bottom-9 2xl:right-9"
            src="../assets/icons/maximize.svg"
            alt="maximize"
          />
        </div>
      </section>
    </main>

    <div
      class="absolute -top-11 right-0 hidden 2xl:block w-full h-[770px] -z-10"
    >
      <div
        class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"
      ></div>
      <img
        class="inset-0 w-full h-full object-cover grayscale"
        :src="user?.urls.regular"
        alt="image"
      />
    </div>
  </div>

  <main v-else class="h-full flex items-center justify-center">
    <img class="animate-spin" src="../assets/icons/loading.svg" alt="loading" />
  </main>
</template>
