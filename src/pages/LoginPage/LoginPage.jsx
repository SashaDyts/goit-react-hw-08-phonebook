import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { useSelector } from 'react-redux';
import { getError } from 'redux/auth/auth-selectors';
import LoginForm from '../../components/LoginForm/LoginForm';
import { removeError } from 'redux/auth/auth-slice';

import { Container, ErrorMessage } from './LoginPage.styled';

const LoginPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeError());
  }, [dispatch]);

  const error = useSelector(getError);

  const onLogin = data => {
    console.log(data);
    dispatch(login(data));
  };

  return (
    <Container>
      <LoginForm onSubmit={onLogin}></LoginForm>

      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Container>
  );
};

export default LoginPage;
