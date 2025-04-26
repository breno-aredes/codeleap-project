import React from "react";
import LoginModal from "../../components/modal/loginModal";
import * as S from "./styles";
import Header from "../../components/header";
import PostForm from "../../components/postForm";
import Post from "../../components/post";

const MainScreen: React.FC = () => {
  return (
    <S.Body>
      <Header />
      <S.Main>
        <PostForm />
        <Post
          title="My First Post at CodeLeap Network!"
          name="@tedy"
          hour="25 minutes ago"
          text="Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat."
        />
      </S.Main>
      <LoginModal />
    </S.Body>
  );
};

export default MainScreen;
