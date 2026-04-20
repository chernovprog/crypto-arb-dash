import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppInitError } from "@/components/AppInitError";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { FullPageLoader } from "@/components/common/FullPageLoader";
import { useInitApp } from "@/hooks/useInitApp";
import MainLayout from "@/layouts/MainLayout";
import ArbitrageBoardPage from "@/pages/ArbitrageBoardPage";
import LoginPage from "@/pages/Auth/LoginPage.tsx";
import ResetPasswordPage from "@/pages/Auth/ResetPasswordPage";
import SignupPage from "@/pages/Auth/SignupPage.tsx";
import HomePage from "@/pages/HomePage";

import NotFoundPage from "./pages/NotFoundPage.tsx";

function App() {
  const { isLoading, isError, refetch } = useInitApp();

  if (isLoading) {
    return <FullPageLoader />;
  }

  if (isError) {
    return <AppInitError onRetry={refetch} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/arbitrage" element={<ArbitrageBoardPage />} />
          </Route>
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
