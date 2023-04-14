import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from '../../sitemisc/baseUrl';
import { concatImgURL } from "../../sitemisc/concatImgURL";

export const fetchGuitar = createAsyncThunk(
  'guitar/fetchGuitar',
  async () => {
    try {
      const response = await fetch(baseUrl + 'guitar');
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


const guitarSlice = createSlice({
  name: 'guitar',
  initialState: {
    guitarArray: [],
    isLoading: true,
    errorMsg: ''
  },
  reducers: {},
  extraReducers: {
    [fetchGuitar.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchGuitar.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errorMsg = '';
      state.guitarArray = concatImgURL(action.payload);
    },
    [fetchGuitar.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.error ? action.error.message : 'Data Fetch failed';
    }
  }
});

export const guitarReducer = guitarSlice.reducer;

export const selectAllGuitar = (state) => state.guitar.guitarArray;

export const selectGuitarById = (guitarid) => (state) =>
  state.guitar.guitarArray.find(
    (guitar) => guitar.id === parseInt(guitarid)
  );

//old version
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// //import { GUITAR } from "../../app/shared/GUITAR";
// import { baseUrl } from '../../sitemisc/baseUrl';
// import { concatImgURL } from "../../sitemisc/concatImgURL";


// export const fetchGuitar = createAsyncThunk(
//     'guitar/fetchGuitar',
//     async () => {
//         const response = await fetch(baseUrl + 'guitar');
//         if (!response.ok) {
//             return Promise.reject('Unable to fetch, status: ' + response.status + response.url);
//         }
//         const data = await response.json();
//         return data;
//     }
// );
// const initialState = {
//     guitarArray: [],
//     isLoading: true,
//     errorMsg: ''
// };

// const guitarSlice = createSlice({
//     name: 'guitar',
//     initialState,
//     reducers: {},
//     extraReducers: {
//         [fetchGuitar.pending]: (state) => {
//             state.isLoading = true;
//         },
//         [fetchGuitar.fulfilled]: (state, action) => {
//             state.isLoading = false;
//             state.errorMsg = '';
//             state.guitarArray = concatImgURL(action.payload);
//         },
//         [fetchGuitar.rejected]: (state, action) => {
//             state.isLoading = false;
//             state.errorMsg = action.error ? action.error.message : 'Data Fetch failed';
//         }
//     }
// });


// export const guitarReducer = guitarSlice.reducer;


// export const selectAllGuitar = (state) => {
//     return state.guitar.guitarArray;
// };

// export const selectGuitarById = (guitarid) => (state) => {
//     return state.guitar.guitarArray.find(
//         (guitar) => guitar.id === parseInt(guitarid));
// };

// // Old Material from front Card
// // export const selectFeaturedGuitar1 = (state) => {
// //     return {
// //         frontFeature: state.guitar.guitarArray.find(
// //             (guitar) => guitar.featured === 1),
// //         isLoading: state.guitar.isLoading,
// //         errorMsg: state.guitar.errorMsg
// //     };
// // };

// // export const selectFeaturedGuitar2 = (state) => {
// //     return {
// //         frontFeature: state.guitar.guitarArray.find(
// //             (guitar) => guitar.featured === 2),
// //         isLoading: state.guitar.isLoading,
// //         errorMsg: state.guitar.errorMsg
// //     };
// // };

// // export const selectFeaturedGuitar3 = (state) => {
// //     return {
// //         frontFeature: state.guitar.guitarArray.find(
// //             (guitar) => guitar.featured === 3),
// //         isLoading: state.guitar.isLoading,
// //         errorMsg: state.guitar.errorMsg
// //     };
// // };

