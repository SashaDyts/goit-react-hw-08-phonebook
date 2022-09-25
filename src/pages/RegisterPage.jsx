import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onRegister = data => {
    console.log(data);
    dispatch(register(data));
  };

  return <RegisterForm onSubmit={onRegister}></RegisterForm>;
};

export default RegisterPage;
