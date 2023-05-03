<script setup lang="ts"></script>

<template>
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
      class="top-1/3 right-[22px] left-[22px] absolute bg-white h-[70px] flex flex-row py-5 px-[25px]"
    >
      <input
        placeholder="Поиск"
        class="w-full focus:outline-none"
        type="text"
      />
      <button class="ml-3">
        <img src="../assets/icons/search.svg" alt="search icon" />
      </button>
    </div>
  </div>

  <!-- <div
    class="h-230 md:h-250 bg-no-repeat bg-cover bg-center"
    style="background-image: url('../assets/background_img.svg')"
  ></div> -->
</template>
