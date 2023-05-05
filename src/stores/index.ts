import { defineStore } from "pinia";
import { IImage } from "../types/types";
import { getImageInfo, getPhotos } from "../api/api";

export const useImagesStore = defineStore("imageStore", {
  state: () => ({
    currentPage: 1,
    images: [] as IImage[],
    likedImages: [] as IImage[],
    loading: false,
  }),
  actions: {
    toggleLike(id: string) {
      console.log("liked");
      const index = this.likedImages.findIndex((image) => image.id === id);
      if (index > -1) {
        this.likedImages.splice(index, 1);
      } else {
        const image = this.images.find((value) => value.id === id);
        if (image) this.likedImages.push(image);
      }
      console.log(this.likedImages.length);
    },
    isLiked(id: string) {
      const idx = this.likedImages.findIndex((image) => image.id === id);
      console.log(idx);
      return idx > -1;
    },
    async getImagesOnscroll() {
      this.loading = true;
      try {
        await new Promise((res) => setTimeout(res, 2000));
        const data = await getPhotos(this.currentPage, "");
        this.images = [...this.images, ...data];
      } catch (e: any) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    async getImages() {
      this.loading = true;
      try {
        const data = await getPhotos(1, "");
        this.images = [...this.images, ...data];
      } catch (e: any) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    async searchImages(query: string) {
      this.loading = true;
      try {
        const data = await getPhotos(this.currentPage, query);
        this.images = data;
      } catch (e: any) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    async getImageInfo(id: string): Promise<any> {
      this.loading = true;
      try {
        const imageData = await getImageInfo(id);
        return imageData;
      } catch (e: any) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
  },
});
