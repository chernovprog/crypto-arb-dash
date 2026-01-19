import axios from 'axios'

const refreshApi = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

function createApiInstance(isProtected = true, redirectToLogin = true) {
  const instance = axios.create({
    baseURL: '/api',
    withCredentials: true,
  });

  if (isProtected) {
    instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            await refreshApi.post('/auth/refresh');
            return instance(originalRequest);
          } catch (refreshError) {
            if (redirectToLogin) {
              window.location.href = '/login';
            }
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );
  }

  return instance;
}

export const publicApi = createApiInstance(false);
export const silentApi = createApiInstance(true, false);
const api = createApiInstance(true);
export default api;
