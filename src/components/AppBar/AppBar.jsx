import React from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { Container } from './AppBar.styled';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <Container>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </Container>
    </>
  );
}
