import { toast } from "react-toastify";
import { useAuth } from "../hooks/useAuth";

export const useAuthenticatedFetch = () => {
  const token = localStorage.getItem("token");

  const { clearUserData } = useAuth();

  let toastDisplayed = false;

  const authenticatedFetch = async (url: string, options: RequestInit = {}) => {
    const headers = {
      ...options.headers,
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };

    const response = await fetch(url, { ...options, headers });

    if (!response.ok) {
      if (response.status === 401) {
        if (!token) return;
        console.warn("User unauthorized. Clearing user data...");

        if (!toastDisplayed) {
          toast.error("You are not authenticated. Please log in to continue.");
          toastDisplayed = true;

          setTimeout(() => {
            toastDisplayed = false;
          }, 3000);
        }

        clearUserData();
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    try {
      return await response.json();
    } catch (error) {
      console.warn("No JSON body returned:", error);
      return response;
    }
  };

  return authenticatedFetch;
};
