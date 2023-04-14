import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { baseUrl } from '../../sitemisc/baseUrl';
import { monUrl } from '../../sitemisc/monUrl';

export const fetchLinks = createAsyncThunk(
    'links/fetchLinks',
    async () => {
        try {
            const response = await fetch(monUrl + 'links');
            if (!response.ok) {
                throw new Error('Unable to fetch, status: ' + response.status + response.url);
            }
            return await response.json();
        } catch (error) {
            return Promise.reject('Data Fetch failed: ' + error.message);
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


//old version
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { baseUrl } from '../../sitemisc/baseUrl';
// import { monUrl } from '../../sitemisc/monUrl';


// export const fetchLinks = createAsyncThunk(
//     'links/fetchLinks',
//     async () => {
//         const response = await fetch(monUrl + 'links');
//         if (!response.ok) {
//             return Promise.reject('Unable to fetch, status: ' + response.status + response.url);
//         }
//         const data = await response.json();
//         return data;
//     }
// );
// const initialState = {
//     linksArray: [],
//     isLoading: true,
//     errorMsg: ''
// };

// const linksSlice = createSlice({
//     name: 'links',
//     initialState,
//     reducers: {},
//     extraReducers: {
//         [fetchLinks.pending]: (state) => {
//             state.isLoading = true;
//         },
//         [fetchLinks.fulfilled]: (state, action) => {
//             state.isLoading = false;
//             state.errorMsg = '';
//             state.linksArray = action.payload;
//         },
//         [fetchLinks.rejected]: (state, action) => {
//             state.isLoading = false;
//             state.errorMsg = action.error ? action.error.message : 'Data Fetch failed';
//         }
//     }
// });


// export const linksReducer = linksSlice.reducer;


// export const selectAllLinks = (state) => {
//     return state.links.linksArray;
// };