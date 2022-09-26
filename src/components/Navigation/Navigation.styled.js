import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #0004ff;

  font-size: 18px;
  font-weight: bold;

  padding-top: 20px;
  padding-bottom: 20px;

  :not(:last-child) {
    margin-right: 10px;
  }

  &.active {
    color: white;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #5500ff;
  }
`;
