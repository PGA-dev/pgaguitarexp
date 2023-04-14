import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { baseUrl } from '../../sitemisc/baseUrl';
import { monUrl } from '../../sitemisc/monUrl';


export const fetchFrontItems = createAsyncThunk(
    'frontitems/fetchFrontItems',
    async () => {
        try {
            const response = await fetch(monUrl + 'frontitems');
            if (!response.ok) {
                throw new Error('Unable to fetch, status: ' + response.status + response.url);
            }
            return await response.json();
        } catch (error) {
            return Promise.reject('Data Fetch failed: ' + error.message);
        }
    }
  );
  
  const frontitemsSlice = createSlice({
    name: 'frontitems',
    initialState: {
        frontitemsArray: [],
        isLoading: true,
        errorMsg: ''
    },
    reducers: {},
    extraReducers: {
        [fetchFrontItems.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchFrontItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errorMsg = '';
            state.frontitemsArray = action.payload;
        },
        [fetchFrontItems.rejected]: (state, action) => {
            state.isLoading = false;
            state.errorMsg = action.error ? action.error.message : 'Data Fetch failed';
        }
    }
  });
  
  export const frontItemsReducer = frontitemsSlice.reducer;
  
  export const selectAllFrontItems = (state) => {
    return state.frontitems.frontitemsArray;
  };
  
