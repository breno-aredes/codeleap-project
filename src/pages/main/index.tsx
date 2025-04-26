import React from "react";
import LoginModal from "../../components/modal/loginModal";
import * as S from "./styles";
import Header from "../../components/header";
import PostForm from "../../components/postForm";

const MainScreen: React.FC = () => {
  return (
    <S.Body>
      <Header />
      <S.Main>
        <PostForm />
      </S.Main>
      <LoginModal />
    </S.Body>
  );
};

export default MainScreen;
