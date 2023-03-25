import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from '../../sitemisc/baseUrl';



export const fetchFrontItems = createAsyncThunk(
    'frontitems/fetchFrontItems',
    async () => {
        const response = await fetch(baseUrl + 'frontitems');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status + response.url);
        }
        const data = await response.json();
        return data;
    }
);
const initialState = {
    frontitemsArray: [],
    isLoading: true,
    errorMsg: ''
};

const frontitemsSlice = createSlice({
    name: 'frontitems',
    initialState,
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