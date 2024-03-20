import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IinitialState {
  comparedCompaniesId: string[];
}

const initialState: IinitialState = {
  comparedCompaniesId: [],
};

export const comparasionSlice = createSlice({
  name: 'comparasion',
  initialState,
  reducers: {
    addToComparison: (state, action: PayloadAction<string>) => {
      if (!state.comparedCompaniesId.includes(action.payload)) {
        state.comparedCompaniesId.push(action.payload);
      }
    },
    deleteFromComparison: (state, action: PayloadAction<string>) => {
      state.comparedCompaniesId = state.comparedCompaniesId.filter(
        (companyId) => companyId !== action.payload
      );
    },
  },
});

export const { addToComparison, deleteFromComparison } =
  comparasionSlice.actions;

export default comparasionSlice.reducer;
