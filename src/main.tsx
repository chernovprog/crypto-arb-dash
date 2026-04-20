import { StrictMode } from 'react'

import { InitColorSchemeScript } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { enableMapSet } from "immer";
import { createRoot } from 'react-dom/client'

import './index.css'
import { AuthProvider } from "@/providers/Auth";
import { ThemeProvider } from "@/providers/Theme";

import App from './App.tsx'

enableMapSet();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <InitColorSchemeScript
        attribute="data-mui-color-scheme"
        modeStorageKey="mui-mode"
      />
      <ThemeProvider>
        <AuthProvider>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
