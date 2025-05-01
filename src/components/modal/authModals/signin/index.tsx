import React, { useState } from "react";
import { ModalContent } from "../styles";

import { toast } from "react-toastify";
import { useAuth } from "../../../../hooks/useAuth";
import { ButtonContent, InputContent } from "../../../../styles/globalStyles";
import Button from "../../../button";

interface LoginFormProps {
  onChangeDirection: (direction: number) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onChangeDirection }) => {
  const { setUsername } = useAuth();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleLogin = () => {
    if (inputEmail.trim() !== "" && inputPassword.trim() !== "") {
      setUsername(inputEmail);
      toast.success("Welcome to CodeLeap network!");
      onChangeDirection(-1);
    }
  };

  return (
    <ModalContent>
      <h1>Welcome to CodeLeap Network!</h1>

      <InputContent>
        <label>Email</label>
        <input
          type="email"
          placeholder="Your email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
      </InputContent>

      <InputContent>
        <label>Password</label>
        <input
          type="password"
          placeholder="Your password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
      </InputContent>

      <p onClick={() => onChangeDirection(1)}>
        Don't have an account? <span>Sign up here.</span>
      </p>

      <ButtonContent>
        <Button
          color="blue"
          onClick={handleLogin}
          disabled={!inputEmail.trim() || !inputPassword.trim()}
        >
          Enter
        </Button>
      </ButtonContent>
    </ModalContent>
  );
};

export default LoginForm;
