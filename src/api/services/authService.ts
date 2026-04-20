import { publicApi, silentApi } from "@/api/client";
import { API_ROUTES } from "@/api/endpoints";

import type { Credentials, ResetPasswordData, User } from "@/providers/Auth/context";

export const authService = {
  getMe: async (): Promise<User> => {
    const { data } = await silentApi.get<User>(API_ROUTES.AUTH.ME);
    return data;
  },

  login: async (credentials: Credentials) => {
    await publicApi.post(API_ROUTES.AUTH.LOGIN, credentials);
  },

  signup: async (data: Credentials) => {
    await publicApi.post(API_ROUTES.AUTH.SIGNUP, data);
  },

  logout: async () => {
    await publicApi.post(API_ROUTES.AUTH.LOGOUT);
  },

  resetPassword: async (data: ResetPasswordData) => {
    await publicApi.post(API_ROUTES.AUTH.RESET_PASSWORD, data);
  }
};
