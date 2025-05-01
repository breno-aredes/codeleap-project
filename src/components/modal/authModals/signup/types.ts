export interface SignupFormProps {
  onChangeDirection: (direction: number) => void;
}

export interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
