import { useState } from "react";
import Modal from "..";
import { ModalContent } from "./styles";
import Button from "../../Button";
import { ButtonContent } from "../../../styles/globalStyles";

const LoginModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible} isWide={false}>
      <ModalContent>
        <h1>Welcome to CodeLeap network!</h1>
        <label>Please enter your username</label>ss
        <input placeholder="Your name"></input>
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
