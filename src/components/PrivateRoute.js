// PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider.tsx';

const PrivateRoute = () => {
  const auth = useAuth();

  return auth.isAuthenticated ? <Outlet/> : <Navigate to='/login'/>
};

export default PrivateRoute;
