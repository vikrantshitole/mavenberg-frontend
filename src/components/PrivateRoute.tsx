import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from '../store/authSlice';
import type { CommonProps } from '../types/common';


const PrivateRoute: React.FC<CommonProps> = ({ children }) => {
  const isAuthenticated  = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute; 