import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IinitialState {
  comparedCompaniesId: string[];
}

const initialState: IinitialState = {
  comparedCompaniesId: ['PRD-001', 'PRD-002', 'PRD-026', 'PRD-022'],
};

export const comparasionSlice = createSlice({
  name: 'comparasion',
  initialState,
  reducers: {
    addToComparison: (state, action: PayloadAction<string>) => {
      state.comparedCompaniesId.push(action.payload);
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
