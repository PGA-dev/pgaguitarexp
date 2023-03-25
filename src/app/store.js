import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
//import counterReducer from '../features/counter/counterSlice';
import { guitarReducer } from '../features/guitar/guitarSlice';
import { guitarstatReducer } from '../features/guitarstats/guitarStatSlice';
import { guitarstatReducer2 } from '../features/guitarstats2/guitarStatSlice2';
import { contactReducer } from '../features/Contact/contactSlice';
import { guitarstatReducer3 } from '../features/guitarstats3/guitarStatSlice3';
import { guitarstatReducer4 } from '../features/guitarstats4/guitarStatSlice4';
import { guitarstatReducer5 } from '../features/guitarstats5/guitarStatSlice5';
import { frontItemsReducer } from '../features/FrontDisplay/frontSlice';
import { linksReducer } from '../features/links/linkSlice';
import { siteRefReducer } from '../features/SiteRef/siteRefSlice';

export const store = configureStore({
  reducer: {
    guitar: guitarReducer,
    guitarstat: guitarstatReducer,
    guitarstat2: guitarstatReducer2,
    guitarstat3: guitarstatReducer3,
    guitarstat4: guitarstatReducer4,
    guitarstat5: guitarstatReducer5,
    frontitems: frontItemsReducer,
    contact: contactReducer,
    links: linksReducer,
    siteref: siteRefReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
