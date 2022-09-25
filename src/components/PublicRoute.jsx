import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

const PublicRoute = ({ redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }

  return <Outlet />;
};

export default PublicRoute;
