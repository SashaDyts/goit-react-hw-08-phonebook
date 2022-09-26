import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isFetching: false,
};

const authSlice = createSlice({
  name: 'auth',

  initialState,

  reducers: {
    removeError: state => {
      state.error = null;
    },
  },

  extraReducers: {
    [register.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [login.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.isLoggedIn = false;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },

    [logout.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [fetchCurrentUser.pending]: state => {
      state.isFetching = true;
    },
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetching = false;
    },
    [fetchCurrentUser.rejected]: state => {
      state.isFetching = false;
    },
    // [fetchCurrentUser.pending]: state => {
    //   state.error = null;
    //   state.isLoading = true;
    //   state.isFetching = true;
    // },
    // [fetchCurrentUser.fulfilled]: (state, { payload }) => {
    //   state.user = payload;
    //   state.isLoggedIn = true;
    //   state.isLoading = false;
    //   state.isFetching = false;
    // },
    // [fetchCurrentUser.rejected]: state => {
    //   state.isLoading = false;
    //   state.token = null;
    //   state.isFetching = false;
    // },
  },
});

export const { removeError } = authSlice.actions;

export default authSlice.reducer;
