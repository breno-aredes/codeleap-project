import React, { useEffect, useState } from "react";
import LoginModal from "../../components/modal/loginModal";
import * as S from "./styles";
import Header from "../../components/header";
import PostForm from "../../components/postForm";
import Post from "../../components/post";
import { PostService } from "../../services/post";

interface PostData {
  id: number;
  title: string;
  username: string;
  created_datetime: string;
  content: string;
}

const MainScreen: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await PostService.getPosts();

        setPosts(data.results || []);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      }
    };

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
            title={post.title}
            name={post.username}
            hour={post.created_datetime}
            text={post.content}
          />
        ))}
      </S.Main>
      <LoginModal />
    </S.Body>
  );
};

export default MainScreen;
