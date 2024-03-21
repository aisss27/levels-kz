import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  userEmail: string | null;
}

const token = localStorage.getItem('token');
const userEmail = localStorage.getItem('userEmail');

const initialState: AuthState = {
  isAuthenticated: Boolean(token),
  token: token,
  userEmail: userEmail,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; email: string }>) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.userEmail = action.payload.email;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('userEmail', action.payload.email);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('userEmail');
    },
    signupSuccess: (state) => {
      state.isAuthenticated = true;
    },
  },
});

export const { login, logout, signupSuccess } = authSlice.actions;

export default authSlice.reducer;
