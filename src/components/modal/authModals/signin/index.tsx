import React from "react";
import { ModalContent } from "../styles";
import { toast } from "react-toastify";
import { useAuth } from "../../../../hooks/useAuth";
import { ButtonContent, InputContent } from "../../../../styles/globalStyles";
import Button from "../../../button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../../../schemas/auth.schemas";
import AuthService from "../../../../services/auth";
import { useLoading } from "../../../../hooks/useLoading";
import { LoginFormInputs, LoginFormProps } from "./types";

const LoginForm: React.FC<LoginFormProps> = ({ onChangeDirection }) => {
  const { setUserData } = useAuth();
  const { setLoading } = useLoading();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(LoginSchema),
  });

  const email = watch("email");
  const password = watch("password");
  const isEmpty = !email || !password;

  const handleLogin = async (data: LoginFormInputs) => {
    try {
      setLoading(true);

      const response = await AuthService.login(data);

      const { uid, token, email } = response;

      setUserData(uid, email, token);
      setLoading(false);
      toast.success("Welcome back to CodeLeap network!");
      onChangeDirection(-1);
    } catch (error: any) {
      setLoading(false);
      console.error(error);

      if (error.message === "Invalid credentials") {
        toast.error("Invalid email or password!");
        setError("password", {
          type: "manual",
          message: "* Invalid credentials",
        });
      } else {
        toast.error(
          error.message || "An error occurred. Please try again later."
        );
      }
    }
  };

  return (
    <ModalContent>
      <h1>Welcome to CodeLeap Network!</h1>

      <form onSubmit={handleSubmit(handleLogin)}>
        <InputContent>
          <label>Email</label>
          <input type="email" placeholder="Your email" {...register("email")} />
          {errors.email && (
            <h2 style={{ color: "red" }}>{errors.email.message}</h2>
          )}
        </InputContent>

        <InputContent>
          <label>Password</label>
          <input
            type="password"
            placeholder="Your password"
            {...register("password")}
          />
          {errors.password && (
            <h2 style={{ color: "red" }}>{errors.password.message}</h2>
          )}
        </InputContent>

        <p onClick={() => onChangeDirection(1)}>
          Don't have an account? <span>Sign up here.</span>
        </p>

        <ButtonContent>
          <Button color="blue" type="submit" disabled={isEmpty}>
            Enter
          </Button>
        </ButtonContent>
      </form>
    </ModalContent>
  );
};

export default LoginForm;
