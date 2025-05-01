import {
  CreateCommentType,
  CreatePost,
  UpdateComment,
  UpdatePost,
} from "../types/posts";
import { useAuthenticatedFetch } from "./authenticatedFetch";

//normalmente ficaria na .env deixei aqui para facilitar rodar o projeto.
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

  const loadPostComments = async (id: number) => {
    return authenticatedFetch(`${BASE_URL}${id}/comments/`, {
      method: "GET",
    });
  };

  const CreateComment = async (id: number, data: CreateCommentType) => {
    return authenticatedFetch(`${BASE_URL}${id}/comments/`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  const deleteComment = async (postId: number, commentId: string) => {
    return authenticatedFetch(`${BASE_URL}${postId}/comments/`, {
      method: "DELETE",
      body: JSON.stringify({ comment_id: commentId }),
    });
  };

  const updateComment = async (postId: number, data: UpdateComment) => {
    return authenticatedFetch(`${BASE_URL}${postId}/comments/`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  };

  const likeComment = async (commentId: string) => {
    return authenticatedFetch(`${BASE_URL}comments/${commentId}/like/`, {
      method: "POST",
    });
  };

  return {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost,
    loadPostComments,
    CreateComment,
    deleteComment,
    updateComment,
    likeComment,
  };
};
