import { Navigate, Outlet } from 'react-router-dom';

import { FullPageLoader } from "@/components/common/FullPageLoader";
import { useAuth } from "@/providers/Auth/context";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <FullPageLoader />;

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
