import React from 'react';
import { NavItem, NavContainer } from './Navigation.styled';

export function Navigation() {
  return (
    <NavContainer>
      <NavItem end to="/">
        Home
      </NavItem>

      <div>
        <NavItem to="/register">Register</NavItem>
        <NavItem to="/login">Login</NavItem>
      </div>
    </NavContainer>
  );
}
