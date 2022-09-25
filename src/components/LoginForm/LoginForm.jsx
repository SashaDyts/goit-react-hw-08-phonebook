import React from 'react';
import { FormStyled, Label, Input, Button } from './LoginForm.styled';
import { initialState } from './initial-state';
// import useForm from 'hooks/useForm';
import useNewForm from 'hooks/useNewForm';

function LoginForm({ onSubmit }) {
  const { state, handleChange, handleSubmit } = useNewForm({
    initialState,
    onSubmit,
  });

  const { password, email } = state;

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Label>
        Email
        <Input
          type="text"
          name="email"
          onChange={handleChange}
          value={email}
          required
          autoComplete="off"
        />
      </Label>

      <Label>
        Password
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
          autoComplete="off"
        />
      </Label>

      <Button type="submit">Login</Button>
    </FormStyled>
  );
}

export default LoginForm;
