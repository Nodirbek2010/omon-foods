import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { CrudUser } from '../Slice/slice';



export const store = configureStore({
    reducer: {
        [CrudUser.reducerPath]: CrudUser.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            CrudUser.middleware,
        ),
});

setupListeners(store.dispatch);