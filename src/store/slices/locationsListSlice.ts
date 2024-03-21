import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {locationType} from '../../types/locationTypes.ts';
import {locationsApi} from '../../api/locations-api.ts';

export const getCompaniesList = createAsyncThunk(
  'locationsList/getLocations',
  async () => {
    return await locationsApi.getLocations().then((res) => res.data);
  }
);

type initialStateType = {
  locationsList: locationType[];
};

const initialState: initialStateType = {
  locationsList: [],
};

export const locationListSlice = createSlice({
  name: 'locationsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompaniesList.fulfilled, (state, action) => {
      state.locationsList = action.payload;
    });
  },
});

export default locationListSlice.reducer;
