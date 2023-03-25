import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../sitemisc/baseUrl';

export const fetchGuitarStat3 = createAsyncThunk(
    'guitarstat3/fetchGuitarStat3',
    async () => {
        const response = await fetch(baseUrl + 'guitarstat3');
        if (!response.ok) {
            return Promise.reject('Fetch Failed status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    guitarstatArray3: [],
    isLoading: true,
    errorMsg: ''
};

const guitarstatSlice3 = createSlice({
    name: 'guitarstat3',
    initialState,
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

export const selectStatByGuitarId3 = (guitarid) => (state) => {
    return state.guitarstat3.guitarstatArray3.filter(
        (guitarstat3) => guitarstat3.guitarid === parseInt(guitarid)
    );
};