import { NavItem } from 'components/Navigation/Navigation.styled';

export default function AuthMenu() {
  return (
    <div>
      <NavItem to="/register">Register</NavItem>
      <NavItem to="/login">Login</NavItem>
    </div>
  );
}
