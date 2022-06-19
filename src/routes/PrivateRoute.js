import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuthStatus } from '../apis';

function PrivateRoute({ children }) {
  const authStatus = getAuthStatus();

  return authStatus ? children : <Navigate to="/" replace />;
}

export default PrivateRoute;
