import { configureStore } from '@reduxjs/toolkit';
import comparasionReducer from './slices/comparasionSlice';
import companiesListReducer from './slices/companiesListSlice';

export const store = configureStore({
  reducer: {
    comparasionReducer,
    companiesListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
