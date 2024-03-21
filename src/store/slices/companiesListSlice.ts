import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { companiesApi } from '../../api/companies-api.ts';
import { companyType } from '../../types/companyTypes.ts';

export const getCompaniesList = createAsyncThunk(
  'companiesList/getCompanies',
  async () => {
    return await companiesApi.getCompanies().then((res) => res.data);
  }
);

type initialStateType = {
  companiesList: companyType[];
};

const initialState: initialStateType = {
  companiesList: [],
};

export const companiesListSlice = createSlice({
  name: 'companiesList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompaniesList.fulfilled, (state, action) => {
      state.companiesList = action.payload;
    });
  },
});

export default companiesListSlice.reducer;
