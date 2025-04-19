// import { Navigate } from 'react-router-dom';

const ONE_DAY = 24 * 60 * 60 * 1000;

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const loginTime = Number(localStorage.getItem('loginTime'));
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const isValid = isLoggedIn && Date.now() - loginTime < ONE_DAY;

  // return isValid ? children : <Navigate to='/login' replace />;
  return isValid ? children : children
};

export default ProtectedRoute;