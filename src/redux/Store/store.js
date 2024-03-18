import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { CatigoriesCrud } from '../Slice/catigories/slice';
import { BannersCrud } from '../Slice/banner/slice';
import { ProductsCrud } from '../Slice/Products/slice';
import { NoteCrud } from '../Slice/note';
import { BasketCrud } from '../Slice/basket';
import { CrudUser } from '../Slice/subCatigories/slice';
import { SubCategoryCrud } from '../Slice/subCatigories';
import {GetSellct} from "../Slice/basket/select.js"
import { DeliveriesCrud } from '../Slice/deliveries/index.js';






export const store = configureStore({
    reducer: {
        [CatigoriesCrud.reducerPath]: CatigoriesCrud.reducer,
        [BannersCrud.reducerPath]: BannersCrud.reducer,
        [ProductsCrud.reducerPath]: ProductsCrud.reducer,
        [NoteCrud.reducerPath]: NoteCrud.reducer,
        [BasketCrud.reducerPath]: BasketCrud.reducer,
        [CrudUser.reducerPath]: CrudUser.reducer,
        [SubCategoryCrud.reducerPath]: SubCategoryCrud.reducer,
        [GetSellct.reducerPath]:GetSellct.reducer,
        [DeliveriesCrud.reducerPath]:DeliveriesCrud.reducer,

        

        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            CatigoriesCrud.middleware,
            BannersCrud.middleware,
            ProductsCrud.middleware,
            NoteCrud.middleware,
            BasketCrud.middleware,
            CrudUser.middleware,
            SubCategoryCrud.middleware,
            GetSellct.middleware,
            DeliveriesCrud.middleware,
        ),
});

setupListeners(store.dispatch);