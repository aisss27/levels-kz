import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {salaryApi} from '../../api/salary-api.ts';
import {salaryType} from '../../types/salaryTypes.ts';

export const getSalariesList = createAsyncThunk(
  'salariesList/getSalaries',
  async () => {
    return await salaryApi.getSalaries().then((res) => res.data);
  }
);

type initialStateType = {
  salariesList: salaryType[];
};

const initialState: initialStateType = {
  salariesList: [],
};

export const salaryListSlice = createSlice({
  name: 'salariesList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSalariesList.fulfilled, (state, action) => {
      state.salariesList = action.payload;
    });
  },
});

export default salaryListSlice.reducer;
