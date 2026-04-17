import { StrictMode } from 'react'

import { InitColorSchemeScript } from "@mui/material";
import { enableMapSet } from "immer";
import { createRoot } from 'react-dom/client'

import './index.css'
import { AuthProvider } from "@/providers/Auth";
import { ThemeProvider } from "@/providers/Theme";

import App from './App.tsx'

enableMapSet();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InitColorSchemeScript
      attribute="data-mui-color-scheme"
      modeStorageKey="mui-mode"
    />
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
