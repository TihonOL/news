import { Outlet, Navigate } from 'react-router';

export default function ProtectedRouter({ children, isAllowed, redirect = '/' }) {
  if (!isAllowed) return <Navigate to={redirect} replace />;
  return children ? children : <Outlet />;
}
