import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../sitemisc/baseUrl';

export const fetchGuitarStat5 = createAsyncThunk(
    'guitarstat5/fetchGuitarStat5',
    async () => {
        const response = await fetch(baseUrl + 'guitarstat5');
        if (!response.ok) {
            return Promise.reject('Fetch Failed status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    guitarstatArray5: [],
    isLoading: true,
    errorMsg: ''
};

const guitarstatSlice5 = createSlice({
    name: 'guitarstat5',
    initialState,
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

export const selectStatByGuitarId5 = (guitarid) => (state) => {
    return state.guitarstat5.guitarstatArray5.filter(
        (guitarstat5) => guitarstat5.guitarid === parseInt(guitarid)
    );
};