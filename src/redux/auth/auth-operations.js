import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'api/auth';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await api.register(credentials);
      return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message
          ? 'Password must have a minimum of 7 characters'
          : 'User with this email already exists',
      };
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await api.login(credentials);
      return data;
    } catch ({ response }) {
      const { status } = response;
      console.log(status);
      const error = {
        status,
        message: 'Email or password is incorrect',
      };

      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await api.logout();
  } catch (error) {}
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    if (token === null) {
      return thunkAPI.rejectWithValue(5);
    }

    try {
      const response = await api.getCurrentUser(token);
      return response;
    } catch (error) {}
  }
);
