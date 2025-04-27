import { useEffect, useState } from "react";
import Modal from "..";
import { ModalContent } from "./styles";
import Button from "../../button";
import { ButtonContent, InputContent } from "../../../styles/globalStyles";
import { useUser } from "../../../hooks/useUser"; // caminho de exemplo

const LoginModal = () => {
  const { setUsername, username } = useUser();
  const [isVisible, setIsVisible] = useState(true);
  const [inputUsername, setInputUsername] = useState("");

  useEffect(() => {
    if (username) {
      setIsVisible(false);
    }
  }, [username]);

  const handleLogin = () => {
    if (inputUsername.trim() !== "") {
      setUsername(inputUsername);
      setIsVisible(false);
    }
  };

  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible} isWide={false}>
      <ModalContent>
        <h1>Welcome to CodeLeap network!</h1>

        <InputContent>
          <label>Please enter your username</label>
          <input
            placeholder="Your name"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
          />
        </InputContent>

        <ButtonContent>
          <Button
            color="blue"
            onClick={handleLogin}
            disabled={!inputUsername.trim()}
          >
            Enter
          </Button>
        </ButtonContent>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
