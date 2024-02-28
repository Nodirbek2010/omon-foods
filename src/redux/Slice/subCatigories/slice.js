import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api } from '../../../api/api';

export const CrudUser = createApi({
    baseQuery: api,
    reducerPath: 'CategoriesCrud',
    tagTypes: ['Catigories'],
    endpoints: (builder) => ({
        getCatigories: builder.query({
            query: () => 'custom-users/',
            providesTags: ['Catigories'],
        }),
        createFamous: builder.mutation({
            query: (body) => ({
                url: `categories/`,
                method: "POST",
                body,
            }),
            invalidatesTags: ['Catigories'],
        }),
        deleteFamous: builder.mutation({
            query: (body) => ({
                url: `custom-users/${body.id}`,
                method: 'DELETE',
                body,
            }),
            invalidatesTags: ['Catigories']
        }),
    }),
});

export const {
  useGetCatigoriesQuery,
  useCreateFamousMutation,
 
    
} = CrudUser;