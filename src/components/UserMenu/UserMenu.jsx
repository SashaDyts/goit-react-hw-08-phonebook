import { useSelector, useDispatch } from 'react-redux';
import { getUserEmail } from 'redux/auth/auth-selectors';
import { Container, Button } from './UserMenu.styled';
import { logout } from 'redux/auth/auth-operations';

export default function UserMenu() {
  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();

  return (
    <Container>
      <p>{userEmail}</p>
      <Button
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </Button>
    </Container>
  );
}
