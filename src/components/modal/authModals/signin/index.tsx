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

interface LoginFormProps {
  onChangeDirection: (direction: number) => void;
}

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onChangeDirection }) => {
  const { setUserData } = useAuth();
  const { setLoading } = useLoading();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(LoginSchema),
  });

  const handleLogin = async (data: LoginFormInputs) => {
    try {
      setLoading(true);
      console.log("oi");
      const response = await AuthService.login(data);

      console.log(response);
      const { uid, token, email } = response;

      setUserData(uid, email, token);
      setLoading(false);
      toast.success("Welcome to CodeLeap network!");
      onChangeDirection(-1);
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      if (error.response?.status === 401) {
        toast.error("Invalid email or password!");
      } else {
        toast.error("An error occurred. Please try again later.");
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
            <p style={{ color: "red" }}>{errors.email.message}</p>
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
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </InputContent>

        <p onClick={() => onChangeDirection(1)}>
          Don't have an account? <span>Sign up here.</span>
        </p>

        <ButtonContent>
          <Button color="blue" type="submit">
            Enter
          </Button>
        </ButtonContent>
      </form>
    </ModalContent>
  );
};

export default LoginForm;
