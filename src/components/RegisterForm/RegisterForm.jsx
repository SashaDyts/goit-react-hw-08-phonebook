import React from 'react';
import { FormStyled, Label, Input, Button } from './RegisterForm.styled';
import { initialState } from './initial-state';
// import useForm from 'hooks/useForm';
import useNewForm from 'hooks/useNewForm';

function RegisterForm({ onSubmit }) {
  const { state, handleChange, handleSubmit } = useNewForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          required
          autoComplete="off"
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
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

      <Button type="submit">Registration</Button>
    </FormStyled>
  );
}

export default RegisterForm;
