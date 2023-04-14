import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../sitemisc/baseUrl';

export const fetchGuitarStat = createAsyncThunk(
  'guitarstat/fetchGuitarStat',
  async () => {
    try {
      const response = await fetch(baseUrl + 'guitarstat');
      if (!response.ok) {
        throw new Error('Unable to fetch, status: ' + response.status + response.url);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return Promise.reject('Data Fetch failed: ' + error.message);
    }
  }
);


const guitarstatSlice = createSlice({
  name: 'guitarstat',
initialState: {  
    guitarstatArray: [],
    isLoading: true,
    errorMsg: ''},
  reducers: {},
  extraReducers: {
    [fetchGuitarStat.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchGuitarStat.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errorMsg = '';
      state.guitarstatArray = action.payload;
    },
    [fetchGuitarStat.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.error ? action.error.message : 'Data Fetch failed';
    },
  },
});

export const guitarstatReducer = guitarstatSlice.reducer;

export const selectStatByGuitarId = (guitarid) => (state) => {
  return state.guitarstat.guitarstatArray.filter(
    (guitarstat) => guitarstat.guitarid === parseInt(guitarid)
  );
};

