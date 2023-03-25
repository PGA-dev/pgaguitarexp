//import { GUITARSTAT } from '../../app/shared/GUITARSTAT';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../sitemisc/baseUrl';

export const fetchGuitarStat2 = createAsyncThunk(
    'guitarstat2/fetchGuitarStat2',
    async () => {
        const response = await fetch(baseUrl + 'guitarstat2');
        if (!response.ok) {
            return Promise.reject('Fetch Failed status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    guitarstatArray2:  [],
    isLoading: true,
    errorMsg: ''
};

const guitarstatSlice2 = createSlice({
    name: 'guitarstat2',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchGuitarStat2.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchGuitarStat2.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errorMsg = '';
            state.guitarstatArray2 = action.payload;
        },
        [fetchGuitarStat2.rejected]: (state, action) => {
            state.isLoading = false;
            state.errorMsg = action.error ? action.error.message : 'Data Fetch failed';
        }
    }
});

export const guitarstatReducer2 = guitarstatSlice2.reducer;

export const selectStatByGuitarId2 = (guitarid) => (state) => {
    return state.guitarstat2.guitarstatArray2.filter(
        (guitarstat2) => guitarstat2.guitarid === parseInt(guitarid)
    );
};