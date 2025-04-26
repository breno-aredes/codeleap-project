import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HooksProvider } from "./hooks/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HooksProvider>
      <App />
    </HooksProvider>
  </StrictMode>
);
