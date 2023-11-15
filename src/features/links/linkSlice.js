import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { baseUrl } from '../../sitemisc/baseUrl';
import { monUrl } from '../../sitemisc/monUrl';

//check for nth
export const fetchLinks = createAsyncThunk(
    'links/fetchLinks',
    async () => {
        //message
        try {
            const response = await fetch(monUrl + 'links');
            if (!response.ok) {
                throw new Error('Fetch response failed, status: ' + response.status + response.url);
            }
            return await response.json();
        } catch (error) {
            return Promise.reject('Data Fetch General failure: ' + error.message);
        }
    }
);

const linksSlice = createSlice({
    name: 'links',
    initialState: {
        linksArray: [],
        isLoading: true,
        errorMsg: ''
    },
    reducers: {},
    extraReducers: {
        [fetchLinks.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchLinks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errorMsg = '';
            state.linksArray = action.payload;
        },
        [fetchLinks.rejected]: (state, action) => {
            state.isLoading = false;
            state.errorMsg = action.error ? action.error.message : 'Data Fetch failed';
        }
    }
});

export const linksReducer = linksSlice.reducer;

export const selectAllLinks = (state) => {
    return state.links.linksArray;
};

