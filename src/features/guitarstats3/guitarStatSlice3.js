import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from '../../sitemisc/baseUrl';

export const fetchGuitarStat3 = createAsyncThunk(
  'guitarstat3/fetchGuitarStat3',
  async () => {
    try {
      const response = await fetch(baseUrl + 'guitarstat3');
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

const guitarstatSlice3 = createSlice({
  name: 'guitarstat3',
  initialState: {
    guitarstatArray3: [],
    isLoading: true,
    errorMsg: ''
  },
  reducers: {},
  extraReducers: {
    [fetchGuitarStat3.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchGuitarStat3.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errorMsg = '';
      state.guitarstatArray3 = action.payload;
    },
    [fetchGuitarStat3.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.error ? action.error.message : 'Data Fetch failed';
    }
  }
});

export const guitarstatReducer3 = guitarstatSlice3.reducer;

export const selectStatByGuitarId3 = (guitarid) => (state) =>
  state.guitarstat3.guitarstatArray3.filter(
    (guitarstat3) => guitarstat3.guitarid === parseInt(guitarid)
  );

