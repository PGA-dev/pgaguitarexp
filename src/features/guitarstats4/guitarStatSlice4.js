import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../sitemisc/baseUrl';

export const fetchGuitarStat4 = createAsyncThunk(
  'guitarstat4/fetchGuitarStat4',
  async () => {
    try {
      const response = await fetch(baseUrl + 'guitarstat4');
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

const guitarstatSlice4 = createSlice({
  name: 'guitarstat4',
  initialState: {
    guitarstatArray4: [],
    isLoading: true,
    errorMsg: ''
  },
  reducers: {},
  extraReducers: {
    [fetchGuitarStat4.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchGuitarStat4.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errorMsg = '';
      state.guitarstatArray4 = action.payload;
    },
    [fetchGuitarStat4.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.error ? action.error.message : 'Data Fetch failed';
    }
  }
});

export const guitarstatReducer4 = guitarstatSlice4.reducer;

export const selectStatByGuitarId4 = (guitarid) => (state) =>
  state.guitarstat4.guitarstatArray4.filter(
    (guitarstat4) => guitarstat4.guitarid === parseInt(guitarid)
  );


