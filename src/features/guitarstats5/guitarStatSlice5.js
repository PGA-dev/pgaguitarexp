import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../sitemisc/baseUrl';

export const fetchGuitarStat5 = createAsyncThunk(
  'guitarstat5/fetchGuitarStat5',
  async () => {
    try {
      const response = await fetch(baseUrl + 'guitarstat5');
      if (!response.ok) {
        throw new Error('Unable to fetch, status: ' + response.status);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return Promise.reject('Data Fetch failed: ' + error.message);
    }
  }
);


const guitarstatSlice5 = createSlice({
  name: 'guitarstat5',
  initialState: {  
    guitarstatArray5: [],
    isLoading: true,
    errorMsg: ''},
  reducers: {},
  extraReducers: {
    [fetchGuitarStat5.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchGuitarStat5.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errorMsg = '';
      state.guitarstatArray5 = action.payload;
    },
    [fetchGuitarStat5.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.error ? action.error.message : 'Data Fetch failed';
    }
  }
});

export const guitarstatReducer5 = guitarstatSlice5.reducer;

export const selectStatByGuitarId5 = (guitarid) => (state) =>
  state.guitarstat5.guitarstatArray5.filter(
    (guitarstat5) => guitarstat5.guitarid === parseInt(guitarid)
  );

