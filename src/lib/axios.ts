import axios, { type AxiosInstance } from 'axios'

interface FailedRequest {
  resolve: () => void;
  reject: (reason?: unknown) => void;
}

let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

const processQueue = (error: unknown) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve();
    }
  });
  failedQueue = [];
};

const commonConfig = {
  baseURL: '/api',
  withCredentials: true,
};

export const refreshApi = axios.create(commonConfig);

function createClient(): AxiosInstance {
  return axios.create(commonConfig);
}

function addAuthInterceptors(client: AxiosInstance, redirectToLogin: boolean) {
  client.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {

        if (isRefreshing) {
          return new Promise<void>((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then(() => client(originalRequest))
            .catch((err) => Promise.reject(err));
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          await refreshApi.post('/auth/refresh');

          processQueue(null);

          return client(originalRequest);
        } catch (error: unknown) {
          processQueue(error);

          if (redirectToLogin) {
            window.location.href = '/login';
          }

          return Promise.reject(error);
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    }
  );
}

export const publicApi = createClient();

export const silentApi = createClient();
addAuthInterceptors(silentApi, false);

const api = createClient();
addAuthInterceptors(api, true);

export default api;
