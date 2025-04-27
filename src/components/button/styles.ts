import styled from "styled-components";

import Theme from "../../styles/theme";
import { StyledButtonProps } from "./types";

const possibleColors = {
  white: {
    "background-color": "transparent",
    border: `1px solid ${Theme.colors.border}`,
    color: Theme.colors.text,
  },
  blue: {
    "background-color": Theme.colors.primary,
    border: `1px solid ${Theme.colors.primary}`,
    color: Theme.colors.secondary,
  },
  red: {
    "background-color": Theme.colors.red.primaryRed,
    border: `1px solid ${Theme.colors.red.primaryRed}`,
    color: Theme.colors.secondary,
  },
  green: {
    "background-color": Theme.colors.green.primaryGreen,
    border: `1px solid ${Theme.colors.green.primaryGreen}`,
    color: Theme.colors.secondary,
  },
  disabled: {
    "background-color": Theme.colors.tertiary,
    border: `1px solid ${Theme.colors.tertiary}`,
    color: Theme.colors.secondary,
  },
};
export const StyledButton = styled.button<StyledButtonProps>`
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s;
  width: 120px;
  height: 32px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;

  ${({ color, disabled }) => {
    const styles =
      possibleColors[
        disabled ? "disabled" : (color as keyof typeof possibleColors)
      ];

    return `
      background-color: ${styles["background-color"]};
      border: ${styles.border};
      color: ${styles.color};
    `;
  }}
`;
