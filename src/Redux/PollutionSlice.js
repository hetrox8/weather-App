import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  isLoading: true,
};

const URL = 'https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=a1028a096c8a5f0f30efc6793c996c70';

export const getData = createAsyncThunk('pollution/getData', async () => {
  const response = await axios(URL);
  return response.data;
});

const pollutionSlice = createSlice({
  name: 'pollution',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

export default pollutionSlice.reducer;
