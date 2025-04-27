import { CreatePost, UpdatePost } from "../types/posts";
import { api } from "./api";

export const PostService = {
  async getPosts() {
    const response = await api.get("/careers/");
    return response.data;
  },

  async createPost(data: CreatePost) {
    const response = await api.post("/careers/", data);
    return response.data;
  },

  async updatePost(id: number, data: UpdatePost) {
    const response = await api.patch(`/careers/${id}/`, data);
    return response.data;
  },

  async deletePost(id: number) {
    await api.delete(`/careers/${id}/`);
  },
};
