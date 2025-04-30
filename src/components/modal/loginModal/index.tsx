import { useEffect, useState } from "react";
import Modal from "..";
import { ModalContent } from "./styles";
import Button from "../../button";
import { ButtonContent, InputContent } from "../../../styles/globalStyles";
import { useUser } from "../../../hooks/useUser";
import { toast } from "react-toastify";

const LoginModal = () => {
  const { setUsername, username } = useUser();
  const [isVisible, setIsVisible] = useState(true);
  const [direction, setDirection] = useState(-1);
  const [inputUsername, setInputUsername] = useState("");

  useEffect(() => {
    if (username) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
      setInputUsername("");
    }
  }, [username]);

  const handleLogin = () => {
    if (inputUsername.trim() !== "") {
      setTimeout(() => {
        setIsVisible(false);
        setUsername(inputUsername);
        setDirection(-1);
      }, 500);

      toast.success("Welcome to CodeLeap network!");
      setDirection(2);
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      isWide={false}
      direction={direction}
    >
      {direction === -1 && (
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
          <p
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => setDirection(1)}
          >
            Click here
          </p>
        </ModalContent>
      )}
      {direction == 1 && (
        <ModalContent>
          <h1>Three Inputs Modal</h1>

          {[...Array(3)].map((_, index) => (
            <InputContent key={index}>
              <label>Input {index + 1}</label>
              <input placeholder={`Input ${index + 1}`} />
            </InputContent>
          ))}

          <ButtonContent>
            <Button color="blue" onClick={() => setDirection(-1)}>
              Go back
            </Button>
          </ButtonContent>
        </ModalContent>
      )}
    </Modal>
  );
};

export default LoginModal;
