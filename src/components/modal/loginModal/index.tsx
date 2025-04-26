import { useState } from "react";
import Modal from "..";
import { ModalContent } from "./styles";
import Button from "../../button";
import { ButtonContent, InputContent } from "../../../styles/globalStyles";

const LoginModal = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible} isWide={false}>
      <ModalContent>
        <h1>Welcome to CodeLeap network!</h1>
        <InputContent>
          <label>Please enter your username</label>
          <input placeholder="Your name"></input>
        </InputContent>

        <ButtonContent>
          <Button color="blue" onClick={() => setIsVisible(false)}>
            Enter
          </Button>
        </ButtonContent>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
