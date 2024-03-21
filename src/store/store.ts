import { configureStore } from '@reduxjs/toolkit';
import comparasionReducer from './slices/comparasionSlice';
import companiesListReducer from './slices/companiesListSlice';
import authReducer from './slices/authSlice.ts';

export const store = configureStore({
  reducer: {
    comparasionReducer,
    companiesListReducer,
    authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
