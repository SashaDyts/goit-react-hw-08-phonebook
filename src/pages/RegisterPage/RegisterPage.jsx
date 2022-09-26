import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { getError } from 'redux/auth/auth-selectors';

import { useEffect } from 'react';
import { removeError } from 'redux/auth/auth-slice';

import { Container, ErrorMessage } from './RegisterPage.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeError());
  }, [dispatch]);

  const error = useSelector(getError);

  const onRegister = data => {
    dispatch(register(data));
  };

  return (
    <Container>
      <RegisterForm onSubmit={onRegister}></RegisterForm>

      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Container>
  );
};

export default RegisterPage;
