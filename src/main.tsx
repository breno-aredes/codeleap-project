import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HooksProvider } from "./hooks/index.tsx";
import { ToastContainer } from "react-toastify";
import Loading from "./components/loading/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HooksProvider>
      <ToastContainer theme="colored" />
      <Loading />
      <App />
    </HooksProvider>
  </StrictMode>
);
