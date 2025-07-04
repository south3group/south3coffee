import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  role: null,
  username: null,
  isAuthChecked: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, role, username } = action.payload;
      state.token = token;
      state.role = role;
      state.username = username;
      state.isAuthChecked = true;
    },
    logout: (state) => {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('role');
      sessionStorage.removeItem('username');
      state.token = null;
      state.role = null;
      state.isAuthChecked = true;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

export const checkAuth = () => (dispatch) => {
  const token = sessionStorage.getItem('token');
  const role = sessionStorage.getItem('role');
  const username = sessionStorage.getItem('username');
  if (token && role) {
    dispatch(setCredentials({ token, role, username }));
  } else {
    dispatch(logout());
  }
};