import React, { useEffect, useState } from "react";

import * as S from "./styles";
import Header from "../../components/header";
import PostForm from "../../components/postForm";
import Post from "../../components/post";
import { PostService } from "../../services/post";
import formatTime from "../../utils/formatTime";
import { useLoading } from "../../hooks/useLoading";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { PostSchema } from "../../schemas/posts.schemas";
import { PostData } from "./types";
import { useUser } from "../../hooks/useUser";
import { toast } from "react-toastify";
import AuthModals from "../../components/modal/authModals";

const MainScreen: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const { setLoading } = useLoading();
  const { username } = useUser();

  const formMethods = useForm({
    resolver: yupResolver(PostSchema),
  });

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const data = await PostService.getPosts();
      setPosts(data.results || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Erro ao buscar posts:", error);
    }
  };

  const handleCreatePost = async (data: { title: string; content: string }) => {
    try {
      setLoading(true);
      await PostService.createPost({
        username: username,
        title: data.title,
        content: data.content,
        created_datetime: new Date().toISOString(),
      });
      await fetchPosts();
      toast.success("Post created successfully!");
      formMethods.reset();
    } catch (error) {
      setLoading(false);
      toast.error("Error creating the post. Please try again.");
      console.error("Erro ao criar post:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <S.Body>
      <Header />
      <S.Main>
        <PostForm useForm={formMethods} onConfirm={handleCreatePost} />

        {posts.length === 0 && (
          <S.NoItens>Your feed is empty, make a post to get started.</S.NoItens>
        )}

        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            name={post.username}
            time={formatTime(post.created_datetime)}
            text={post.content}
            fetchPosts={fetchPosts}
          />
        ))}
      </S.Main>
      <AuthModals />
    </S.Body>
  );
};

export default MainScreen;
