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
    "&:hover": {
      "background-color": "#345bc5",
    },
  },
  red: {
    "background-color": Theme.colors.red.primaryRed,
    border: `1px solid ${Theme.colors.red.primaryRed}`,
    color: Theme.colors.secondary,
    "&:hover": {
      "background-color": "rgba(214, 26, 45, 0.9)",
    },
  },
  green: {
    "background-color": Theme.colors.green.primaryGreen,
    border: `1px solid ${Theme.colors.green.primaryGreen}`,
    color: Theme.colors.secondary,
    "&:hover": {
      "background-color": "rgba(31, 129, 54, 0.9)",
    },
  },
  disabled: {
    "background-color": Theme.colors.tertiary,
    border: `1px solid ${Theme.colors.tertiary}`,
    color: Theme.colors.secondary,
  },
};

export const StyledButton = styled.button<StyledButtonProps>(
  ({ color, disabled }) => ({
    ...possibleColors[
      disabled ? "disabled" : (color as keyof typeof possibleColors)
    ],

    padding: "7px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",

    transition: "0.7s",
    svg: {
      width: "1.4rem",
    },
    width: "120px",
    height: "32px",
    borderRadius: "8px",
    fontWeight: 700,
    fontSize: "16px",
  })
);
