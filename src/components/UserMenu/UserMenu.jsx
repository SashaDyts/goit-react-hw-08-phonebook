import { useSelector, useDispatch } from 'react-redux';
import { getUserEmail } from 'redux/auth/auth-selectors';
import { Container, Button } from './UserMenu.styled';
import { logout } from 'redux/auth/auth-operations';
// import { useNavigate } from 'react-router-dom';

export default function UserMenu() {
  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();
  //   const navigate = useNavigate();

  return (
    <Container>
      <p>{userEmail}</p>
      <Button
        type="button"
        onClick={() => {
          dispatch(logout());
          //   navigate('/login');
        }}
      >
        Logout
      </Button>
    </Container>
  );
}
