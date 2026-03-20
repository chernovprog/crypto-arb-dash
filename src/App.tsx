import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import ForgotPasswordPage from "@/pages/Auth/ForgotPasswordPage";
import LoginPage from "@/pages/Auth/LoginPage.tsx";
import SignupPage from "@/pages/Auth/SignupPage.tsx";
import HomePage from "@/pages/Home/HomePage";

import NotFoundPage from "./pages/NotFoundPage.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
