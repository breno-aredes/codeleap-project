import { CreatePost, UpdatePost } from "../types/posts";

const BASE_URL = "https://dev.codeleap.co.uk/careers/";

export const PostService = {
  async getPosts() {
    try {
      const response = await fetch(BASE_URL, {
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

  async createPost(data: CreatePost) {
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Erro ao criar post:", error);
      throw error;
    }
  },

  async updatePost(id: number, data: UpdatePost) {
    try {
      const response = await fetch(`${BASE_URL}${id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Erro ao atualizar post:", error);
      throw error;
    }
  },

  async deletePost(id: number) {
    try {
      const response = await fetch(`${BASE_URL}${id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Erro ao deletar post:", error);
      throw error;
    }
  },
};
