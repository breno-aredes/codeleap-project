import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

const Button = ({ children, color = "white", ...props }: ButtonProps) => {
  return (
    <StyledButton color={color} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
