import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { CatigoriesCrud } from '../Slice/catigories/slice';



export const store = configureStore({
    reducer: {
        [CatigoriesCrud.reducerPath]: CatigoriesCrud.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            CatigoriesCrud.middleware,
        ),
});

setupListeners(store.dispatch);