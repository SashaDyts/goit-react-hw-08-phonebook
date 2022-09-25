import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: inherit;
  color: black;
  border: none;

  font-size: 16px;

  margin-left: 10px;

  padding-top: 20px;
  padding-bottom: 20px;

  cursor: pointer;

  :hover,
  :focus {
    color: red;
  }
`;
