import { defineStore } from "pinia";
import { IImage } from "../types/types";
import { getPhotos } from "../api/api";

export const useImagesStore = defineStore("imageStore", {
  state: () => ({
    currentPage: 1,
    images: [] as IImage[],
    likedImages: [] as IImage[],
    loading: false,
  }),
  actions: {
    removeFromFavourites(id: string) {
      this.likedImages = this.likedImages.filter((image) => image.id !== id);
    },
    async getImagesOnscroll() {
      this.loading = true;
      try {
        this.currentPage++;
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
        this.images = data;
      } catch (e: any) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    async searchImages(query: string) {
      const data = await getPhotos(this.currentPage, query);
      this.images = data;
      this.currentPage++;
    },
    async getImageInfo(id: number): Promise<any> {
      const imageData = await this.getImageInfo(id);
      return imageData;
    },
  },
});
