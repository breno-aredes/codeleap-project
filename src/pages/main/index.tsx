import React from "react";
import LoginModal from "../../components/modal/loginModal";

const MainScreen: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Main Screen</h1>

      <LoginModal />
    </div>
  );
};

export default MainScreen;
