import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import LoginForm from '../components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = data => {
    console.log(data);
    dispatch(login(data));
  };

  return <LoginForm onSubmit={onLogin}></LoginForm>;
};

export default LoginPage;
