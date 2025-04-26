import { ButtonHTMLAttributes } from "react";

export type Colors = "white" | "blue" | "red" | "green";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Colors;
  children?: React.ReactNode;
}

export type StyledButtonProps = {
  color: Colors;
};
