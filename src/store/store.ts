import { configureStore } from '@reduxjs/toolkit';
import comparasionReducer from './slices/comparasionSlice';
import companiesListReducer from './slices/companiesListSlice';
import locationsListReducer from './slices/locationsListSlice.ts';
import specializationsListReducer from './slices/specializationsListSlice.ts';
import salariesListReducer from './slices/salariesListSlice.ts';
import authReducer from './slices/authSlice.ts';

export const store = configureStore({
  reducer: {
    comparasionReducer,
    companiesListReducer,
    locationsListReducer,
    specializationsListReducer,
    salariesListReducer,
    authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
