import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const CrudUser = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ratingkorea.pythonanywhere.com/api/v1/' }),
    reducerPath: 'FamousData',
    tagTypes: ['Famous'],
    endpoints: (builder) => ({
        getFamous: builder.query({
            query: () => 'custom-users/',
            providesTags: ['Famous'],
        }),
        createFamous: builder.mutation({
            query: (body) => ({
                url: `categories/`,
                method: "POST",
                body,
            }),
            invalidatesTags: ['Famous'],
        }),
        deleteFamous: builder.mutation({
            query: (body) => ({
                url: `custom-users/${body.id}`,
                method: 'DELETE',
                body,
            }),
            invalidatesTags: ['Famous']
        }),
    }),
});

export const {
    useGetFamousQuery,
    useDeleteFamousMutation,
    useCreateFamousMutation,
} = CrudUser;