import React from "react";
import { ModalContent } from "../styles";

import Button from "../../../button";
import { ButtonContent, InputContent } from "../../../../styles/globalStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import AuthService from "../../../../services/auth";
import { useLoading } from "../../../../hooks/useLoading";
import { SignupSchema } from "../../../../schemas/auth.schemas";
import { SignupFormInputs, SignupFormProps } from "./types";
import { useAuth } from "../../../../hooks/useAuth";

const SignUp: React.FC<SignupFormProps> = ({ onChangeDirection }) => {
  const { setLoading } = useLoading();
  const { setUserData } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupFormInputs>({
    resolver: yupResolver(SignupSchema),
  });

  const name = watch("name");
  const email = watch("email");
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const isEmpty = !name || !email || !password || !confirmPassword;

  const handleSignUp = async (data: SignupFormInputs) => {
    try {
      setLoading(true);
      const response = await AuthService.register({
        name: data.name,
        email: data.email,
        password: data.password,
      });
      const { uid, token, email } = response;
      setUserData(uid, email, token);

      toast.success("Welcome to CodeLeap network!");
      setLoading(false);
      onChangeDirection(-1);
    } catch (error: any) {
      setLoading(false);
      toast.error(error.message || "An error occurred. Please try again.");
    }
  };

  return (
    <ModalContent>
      <h1>Create your account and join the CodeLeap Network!</h1>

      <form onSubmit={handleSubmit(handleSignUp)}>
        <InputContent>
          <label>Name</label>
          <input type="name" placeholder="Name" {...register("name")} />
          {errors.name && (
            <h2 style={{ color: "red" }}>{errors.name.message}</h2>
          )}
        </InputContent>

        <InputContent>
          <label>Email</label>
          <input type="email" placeholder="Email" {...register("email")} />
          {errors.email && (
            <h2 style={{ color: "red" }}>{errors.email.message}</h2>
          )}
        </InputContent>

        <InputContent>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <h2 style={{ color: "red" }}>{errors.password.message}</h2>
          )}
        </InputContent>

        <InputContent>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <h2 style={{ color: "red" }}>{errors.confirmPassword.message}</h2>
          )}
        </InputContent>

        <p onClick={() => onChangeDirection(-1)}>
          Already have an account? <span>Click here</span>
        </p>

        <ButtonContent>
          <Button color="blue" type="submit" disabled={isEmpty}>
            Register
          </Button>
        </ButtonContent>
      </form>
    </ModalContent>
  );
};

export default SignUp;
