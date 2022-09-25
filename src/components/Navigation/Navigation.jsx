import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { NavItem, NavContainer } from './Navigation.styled';

export function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <NavContainer>
      <NavItem end to="/">
        Home
      </NavItem>
      {isLoggedIn && (
        <NavItem end to="/contacts">
          Contacts
        </NavItem>
      )}
      {/* <NavItem end to="/contacts">
        Contacts
      </NavItem> */}
    </NavContainer>
  );
}
