import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from '../../sitemisc/baseUrl';

export const fetchSiteRef = createAsyncThunk(
    'siteref/fetchSiteRef',
    async () => {
        try {
            const response = await fetch(baseUrl + 'siteref');
            if (!response.ok) {
                throw new Error('Unable to fetch, status: ' + response.status + response.url);
            }
            return await response.json();
        } catch (error) {
            return Promise.reject('Data Fetch failed: ' + error.message);
        }
    }
);

const siterefSlice = createSlice({
    name: 'siteref',
    initialState: {
        siterefArray: [],
        isLoading: true,
        errorMsg: ''
    },
    reducers: {},
    extraReducers: {
        [fetchSiteRef.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchSiteRef.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errorMsg = '';
            state.siterefArray = action.payload;
        },
        [fetchSiteRef.rejected]: (state, action) => {
            state.isLoading = false;
            state.errorMsg = action.error ? action.error.message : 'Data Fetch failed';
        }
    }
});

export const siteRefReducer = siterefSlice.reducer;

export const selectAllSiteRef = (state) => {
    return state.siteref.siterefArray;
};


//.then version:
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { baseUrl } from '../../sitemisc/baseUrl';

// export const fetchSiteRef = createAsyncThunk(
//     'siteref/fetchSiteRef',
//     () => {
//         return fetch(baseUrl + 'siteref')
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Unable to fetch, status: ' + response.status + response.url);
//                 }
//                 return response.json();
//             })
//             .catch((error) => {
//                 throw new Error('Data Fetch failed: ' + error.message);
//             });
//     }
// );

// const siterefSlice = createSlice({
//     name: 'siteref',
//     initialState: {
//         siterefArray: [],
//         isLoading: true,
//         errorMsg: ''
//     },
//     reducers: {},
//     extraReducers: {
//         [fetchSiteRef.pending]: (state) => {
//             state.isLoading = true;
//         },
//         [fetchSiteRef.fulfilled]: (state, action) => {
//             state.isLoading = false;
//             state.errorMsg = '';
//             state.siterefArray = action.payload;
//         },
//         [fetchSiteRef.rejected]: (state, action) => {
//             state.isLoading = false;
//             state.errorMsg = action.error ? action.error.message : 'Data Fetch failed';
//         }
//     }
// });

// export const siteRefReducer = siterefSlice.reducer;

// export const selectAllSiteRef = (state) => {
//     return state.siteref.siterefArray;
// };
//old version
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { baseUrl } from '../../sitemisc/baseUrl';


// export const fetchSiteRef = createAsyncThunk(
//     'siteref/fetchSiteref',
//     async () => {
//         const response = await fetch(baseUrl + 'siteref');
//         if (!response.ok) {
//             return Promise.reject('Unable to fetch, status: ' + response.status + response.url);
//         }
//         const data = await response.json();
//         return data;
//     }
// );
// const initialState = {
//     siterefArray: [],
//     isLoading: true,
//     errorMsg: ''
// };

// const siterefSlice = createSlice({
//     name: 'siteref',
//     initialState,
//     reducers: {},
//     extraReducers: {
//         [fetchSiteRef.pending]: (state) => {
//             state.isLoading = true;
//         },
//         [fetchSiteRef.fulfilled]: (state, action) => {
//             state.isLoading = false;
//             state.errorMsg = '';
//             state.siterefArray = action.payload;
//         },
//         [fetchSiteRef.rejected]: (state, action) => {
//             state.isLoading = false;
//             state.errorMsg = action.error ? action.error.message : 'Data Fetch failed';
//         }
//     }
// });


// export const siteRefReducer = siterefSlice.reducer;


// export const selectAllSiteRef = (state) => {
//     return state.siteref.siterefArray;
// };