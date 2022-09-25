import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

const PrivateRoute = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
