import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { companiesApi } from '../../api/companies-api.ts';

export const getCompaniesList = createAsyncThunk(
  'companiesList/getCompanies',
  async () => {
    return await companiesApi.getCompanies().then((res) => res.data);
  }
);

export interface Icompany {
  _id: string;
  name: string;
  image: string;
  averageSalary: number;
}

export interface IinitialState {
  companiesList: Icompany[];
}

const initialState: IinitialState = {
  companiesList: [],
};

export const companiesListSlice = createSlice({
  name: 'companiesList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompaniesList.fulfilled, (state, action) => {
      state.companiesList.push(...action.payload);
    });
  },
});

export default companiesListSlice.reducer;
