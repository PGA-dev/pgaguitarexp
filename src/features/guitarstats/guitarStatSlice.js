//import { GUITARSTAT } from '../../app/shared/GUITARSTAT';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../sitemisc/baseUrl';
import { monUrl } from '../../sitemisc/monUrl';

export const fetchGuitarStat = createAsyncThunk(
    'guitarstat/fetchGuitarStat',
    async () => {
        const response = await fetch(baseUrl + 'guitarstat');
        if (!response.ok) {
            return Promise.reject('Fetch Failed status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    guitarstatArray:  [],
    isLoading: true,
    errorMsg: ''
};

const guitarstatSlice = createSlice({
    name: 'guitarstat',
    initialState,
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
        }
    }
});

export const guitarstatReducer = guitarstatSlice.reducer;

export const selectStatByGuitarId = (guitarid) => (state) => {
    return state.guitarstat.guitarstatArray.filter(
        (guitarstat) => guitarstat.guitarid === parseInt(guitarid)
    );
};