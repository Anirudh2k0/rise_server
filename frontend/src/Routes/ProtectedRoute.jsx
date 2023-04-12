import { Navigate, Outlet } from 'react-router-dom';
import { getUser } from '@/utils/authUtils';

function ProtectedRoute() {
  const isLoggedIn = getUser();
  return Boolean(isLoggedIn) ? <Outlet /> : <Navigate to='/login' />;
}

export default ProtectedRoute;
