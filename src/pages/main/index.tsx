import React from "react";
import LoginModal from "../../components/modal/loginModal";
import * as S from "./styles";
import Header from "../../components/header";

const MainScreen: React.FC = () => {
  return (
    <S.Body>
      <Header />
      <S.Main></S.Main>
      <LoginModal />
    </S.Body>
  );
};

export default MainScreen;
