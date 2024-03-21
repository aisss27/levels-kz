import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {specializationType} from '../../types/specializationTypes.ts';
import {specializationsApi} from '../../api/specializations-api.ts';

export const getCompaniesList = createAsyncThunk(
  'specializationsList/getSpecializations',
  async () => {
    return await specializationsApi.getAllSpecializations().then((res) => res.data);
  }
);

type initialStateType = {
  specializationsList: specializationType[];
};

const initialState: initialStateType = {
  specializationsList: [],
};

export const specializationListSlice = createSlice({
  name: 'specializationsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompaniesList.fulfilled, (state, action) => {
      state.specializationsList = action.payload;
    });
  },
});

export default specializationListSlice.reducer;
