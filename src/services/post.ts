import { CreatePost, UpdatePost } from "../types/posts";
import { useAuthenticatedFetch } from "./authenticatedFetch";

const BASE_URL = "https://posts-manager-api.onrender.com/api/careers/";

export const PostService = () => {
  const authenticatedFetch = useAuthenticatedFetch();

  const getPosts = async () => {
    return authenticatedFetch(BASE_URL, {
      method: "GET",
    });
  };

  const createPost = async (data: CreatePost) => {
    return authenticatedFetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  const updatePost = async (id: number, data: UpdatePost) => {
    return authenticatedFetch(`${BASE_URL}${id}/`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  };

  const deletePost = async (id: number) => {
    return authenticatedFetch(`${BASE_URL}${id}/`, {
      method: "DELETE",
    });
  };

  const likePost = async (id: number) => {
    return authenticatedFetch(`${BASE_URL}${id}/like/`, {
      method: "POST",
    });
  };

  return { getPosts, createPost, updatePost, deletePost, likePost };
};
