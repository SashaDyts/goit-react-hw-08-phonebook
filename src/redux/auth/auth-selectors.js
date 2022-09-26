export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getIsFetching = state => state.auth.isFetching;

export const getUserEmail = state => state.auth.user.email;

export const getError = state => state.auth.error;

export const getIsLoading = state => state.auth.isLoading;
