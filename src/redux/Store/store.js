import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { CatigoriesCrud } from '../Slice/catigories/slice';
import { BannersCrud } from '../Slice/banner/slice';
import { ProductsCrud } from '../Slice/Products/slice';



export const store = configureStore({
    reducer: {
        [CatigoriesCrud.reducerPath]: CatigoriesCrud.reducer,
        [BannersCrud.reducerPath]: BannersCrud.reducer,
        [ProductsCrud.reducerPath]: ProductsCrud.reducer,


        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            CatigoriesCrud.middleware,
            BannersCrud.middleware,
            ProductsCrud.middleware,


        ),
});

setupListeners(store.dispatch);