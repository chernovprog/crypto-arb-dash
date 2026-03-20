import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import './index.css'
import { AuthProvider } from "@/providers/Auth";
import { ThemeProvider } from "@/providers/Theme";

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
