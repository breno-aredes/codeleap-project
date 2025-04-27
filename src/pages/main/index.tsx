import React, { useEffect, useState } from "react";
import LoginModal from "../../components/modal/loginModal";
import * as S from "./styles";
import Header from "../../components/header";
import PostForm from "../../components/postForm";
import Post from "../../components/post";
import { PostService } from "../../services/post";
import formatTime from "../../utils/formatTime";
import { useLoading } from "../../hooks/useLoading";

interface PostData {
  id: number;
  title: string;
  username: string;
  created_datetime: string;
  content: string;
}

const MainScreen: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const { setLoading } = useLoading();
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

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <S.Body>
      <Header />
      <S.Main>
        <PostForm />
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
