import { CreatePost, UpdatePost } from "../types/posts";
import { api } from "./api";

export const PostService = {
  async getPosts() {
    const response = await api.get("");
    console.log(response);
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

export const PostService2 = {
  async getPosts() {
    try {
      const response = await fetch("https://dev.codeleap.co.uk/careers/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
      throw error;
    }
  },
};
