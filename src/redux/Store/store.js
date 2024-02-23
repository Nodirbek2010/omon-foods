import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { CatigoriesCrud } from '../Slice/catigories/slice';
import { BannersCrud } from '../Slice/banner/slice';



export const store = configureStore({
    reducer: {
        [CatigoriesCrud.reducerPath]: CatigoriesCrud.reducer,
        [BannersCrud.reducerPath]: BannersCrud.reducer,

        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            CatigoriesCrud.middleware,
            BannersCrud.middleware,

        ),
});

setupListeners(store.dispatch);