import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Theme from "../styles/theme";
import { UserProvider } from "./useUser";

interface HooksProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

export const HooksProvider: React.FC<HooksProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ThemeProvider theme={Theme}>{children}</ThemeProvider>
      </UserProvider>
    </QueryClientProvider>
  );
};
