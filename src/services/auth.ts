import { FirebaseAuthUser, LoginData, RegisterData } from "../types/auth";

const BASE_URL = "https://posts-manager-api.onrender.com/api/careers";

const AuthService = {
  async register(data: RegisterData): Promise<FirebaseAuthUser> {
    try {
      const response = await fetch(`${BASE_URL}/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao registrar o usuário.");
      }

      return await response.json();
    } catch (error: any) {
      throw new Error(error.message || "Erro de conexão.");
    }
  },

  async login(data: LoginData): Promise<FirebaseAuthUser> {
    try {
      const response = await fetch(`${BASE_URL}/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao logar o usuário.");
      }

      return await response.json();
    } catch (error: any) {
      throw new Error(error.message || "Erro de conexão.");
    }
  },
};

export default AuthService;
