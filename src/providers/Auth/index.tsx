import { type ReactNode, useEffect, useState } from "react";

import { publicApi, silentApi } from "@/lib/axios";
import { AuthContext, type Credentials, type ForgotPasswordData, type User } from "@/providers/Auth/context";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const checkAuth = async () => {
    try {
      setIsLoading(true);
      const response = await silentApi.get('/auth/me');
      setUser(response.data);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    void checkAuth();
  }, []);

  const login = async (credentials: Credentials) => {
    await publicApi.post('/auth/login', credentials);
    await checkAuth();
  };

  const signup = async (credentials: Credentials) => {
    await publicApi.post('/auth/signup', credentials);
    await checkAuth();
  }

  const logout = async () => {
    await publicApi.post('/auth/logout');
    setUser(null);
  };

  const forgotPassword = async (data: ForgotPasswordData) => {
    await publicApi.post('/auth/forgot-password', data);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    logout,
    forgotPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
