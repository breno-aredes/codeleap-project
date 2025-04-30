import React, { useState } from "react";
import { ModalContent } from "../styles";

import Button from "../../../button";
import { ButtonContent, InputContent } from "../../../../styles/globalStyles";

interface SignupFormProps {
  onChangeDirection: (direction: number) => void;
}

const SignUp: React.FC<SignupFormProps> = ({ onChangeDirection }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.password &&
    formData.confirmPassword;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <ModalContent>
      <h1>Create your account and join the CodeLeap Network!</h1>

      <InputContent>
        <label>Nome</label>
        <input
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
        />
      </InputContent>

      <InputContent>
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </InputContent>

      <InputContent>
        <label>Senha</label>
        <input
          name="password"
          type="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
        />
      </InputContent>

      <InputContent>
        <label>Confirme sua senha</label>
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </InputContent>

      <p onClick={() => onChangeDirection(-1)}>
        Already have an account? <span>Click here</span>
      </p>

      <ButtonContent>
        <Button
          color="blue"
          onClick={() => onChangeDirection(-1)}
          disabled={!isFormValid}
        >
          Register
        </Button>
      </ButtonContent>
    </ModalContent>
  );
};

export default SignUp;
