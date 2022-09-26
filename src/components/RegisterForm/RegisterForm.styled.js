import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  /* border: solid 1px black; */
  align-items: center;
  /* background-color: #c51bd6; */
  border-radius: 5px;

  text-align: center;

  margin-top: 30px;
  /* 
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2); */
  /* border-radius: 0px 0px 4px 4px; */
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: white;

  padding: 10px;
`;

export const Input = styled.input`
  width: 300px;

  outline-color: #731bd6;
  color: #731bd6;
  border-radius: 5px;
  border: none;
  padding: 3px;

  margin-top: 8px;
`;

export const Button = styled.button`
  cursor: pointer;
  color: white;
  border: none;
  padding: 10px;
  background-color: #0004ff;
  width: 50%;
  border-radius: 5px;
  margin-bottom: 10px;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
