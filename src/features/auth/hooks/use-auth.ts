// /features/auth/hooks/useAuth.ts
import { useState } from "react";

interface UseAuthReturn {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const useAuth = (): UseAuthReturn => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const login = (username: string, password: string) => {
    // Perform login logic
    setAuthenticated(true);
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};
