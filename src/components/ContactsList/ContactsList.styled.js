import styled from 'styled-components';

export const ContactList = styled.ul`
  list-style: none;
`;

export const ContactListItem = styled.li`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;

  padding: 5px;

  background-color: #c51bd6;
  border-radius: 5px;
  /* outline: 1px solid black; */
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const DeleteContactBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;

  padding: 0 4px 0 4px;
  margin-left: 10px;
  background-color: inherit;
  border: none;

  cursor: pointer;
  /* color: #ff4242; */
  color: white;
  font-weight: bold;

  border-radius: 5px;
`;
