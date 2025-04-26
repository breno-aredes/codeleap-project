import React from "react";
import Modal from "../../components/modal";

const MainScreen: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  return (
    <div>
      <h1>Welcome to the Main Screen</h1>

      <Modal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        isWide={false}
      ></Modal>
    </div>
  );
};

export default MainScreen;
