import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../config/firebase';

const ProtectedRoute = ({ element: Component }) => {
  const user = auth.currentUser;

  return user ? <Component /> : <Navigate to="/*" />;
};

export default ProtectedRoute;