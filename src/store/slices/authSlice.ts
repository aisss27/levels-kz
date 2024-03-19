import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  email: string;
  password: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  email: '',
  password: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true');
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.setItem('isAuthenticated', 'false');
    },
    signup: (state, action: PayloadAction<{ email: string; password: string }>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('email', action.payload.email); 
    },
  },
});

export const { login, logout, signup } = authSlice.actions;

export default authSlice.reducer;
