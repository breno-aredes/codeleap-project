import React, { useEffect, useState } from "react";
import LoginModal from "../../components/modal/loginModal";
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
      setLoading(false);
      formMethods.reset();
    } catch (error) {
      setLoading(false);
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
      <LoginModal />
    </S.Body>
  );
};

export default MainScreen;
