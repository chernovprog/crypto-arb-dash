import { type ReactNode } from "react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { authService } from "@/api/services/authService";
import { AuthContext } from "@/providers/Auth/context";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();

  const {
    data: user,
    isLoading
  } = useQuery({
    queryKey: ['auth-user'],
    queryFn: authService.getMe,
    retry: false,
    staleTime: Infinity,
  });

  const loginMutation = useMutation({
    mutationFn: authService.login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auth-user'] });
    }
  });

  const logoutMutation = useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      queryClient.setQueryData(['auth-user'], null);
    }
  });

  const signupMutation = useMutation({
    mutationFn: authService.signup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auth-user'] });
    }
  });

  const value = {
    user: user ?? null,
    isAuthenticated: !!user,
    isLoading: isLoading || loginMutation.isPending || logoutMutation.isPending,
    login: loginMutation.mutateAsync,
    signup: signupMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,
    resetPassword: authService.resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
