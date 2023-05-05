import axios from "axios";

const api = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    "Accept-Version": "v1",
  },
});

export async function getPhotos(page: number, search: string) {
  const params = {
    client_id: "QKIi0V34osp9icywfkd9fv_CbxowYWBofq94warenQs",
    count: "8",
    per_page: "8",
    page: page.toString(),
    query: search,
    orientation: "landscape",
  };
  const filteredParams = new URLSearchParams(params);
  const { data } = await api.get(`/photos/random?${filteredParams}`);
  return data;
}

export async function getImageInfo(id: string) {
  const { data } = await api.get(
    `/photos/${id}?client_id=QKIi0V34osp9icywfkd9fv_CbxowYWBofq94warenQs`
  );
  return data;
}
