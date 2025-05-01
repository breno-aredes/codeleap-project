import { useState, useEffect } from "react";
import Modal from "..";

import { useAuth } from "../../../hooks/useAuth";
import LoginForm from "./signin";
import SignUp from "./signup";

const AuthModals = () => {
  const { isAuth } = useAuth();
  const [isVisible, setIsVisible] = useState(true);
  const [direction, setDirection] = useState(-1);

  useEffect(() => {
    setIsVisible(!isAuth());
  }, [isAuth]);

  const handleChangeDirection = (newDirection: number) => {
    setDirection(newDirection);
  };

  return (
    <Modal
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      isWide={false}
      direction={direction}
    >
      {direction === -1 && (
        <LoginForm onChangeDirection={handleChangeDirection} />
      )}
      {direction === 1 && <SignUp onChangeDirection={handleChangeDirection} />}
    </Modal>
  );
};

export default AuthModals;
