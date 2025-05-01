import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface UserContextType {
  userId: string | null;
  username: string;
  token: string | null;
  setUserData: (id: string, name: string, token: string) => void;
  clearUserData: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedUserId = localStorage.getItem("userId");
    const savedUsername = localStorage.getItem("username");
    const savedToken = localStorage.getItem("token");

    if (savedUserId) {
      setUserId(savedUserId);
    }
    if (savedUsername) {
      setUsername(savedUsername);
    }
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const setUserData = (id: string, name: string, authToken: string) => {
    const lowercaseName = name.toLowerCase();
    setUserId(id);
    setUsername(lowercaseName);
    setToken(authToken);

    localStorage.setItem("userId", id);
    localStorage.setItem("username", lowercaseName);
    localStorage.setItem("token", authToken);
  };

  const clearUserData = () => {
    setUserId(null);
    setUsername("");
    setToken(null);

    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider
      value={{ userId, username, token, setUserData, clearUserData }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuth must be used within a UserProvider");
  }
  return context;
}
