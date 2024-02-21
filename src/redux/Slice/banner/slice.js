import { createApi } from '@reduxjs/toolkit/query/react';
import { api } from '../../../api/api';

export const BannersCrud = createApi({
    baseQuery: api,
    reducerPath: 'BannersCruds',
    tagTypes: ['Banners'],
    endpoints: (builder) => ({
        getBanners: builder.query({
            query: () => 'banners/',
            providesTags: ['Banners'],
        }),
        createBanners: builder.mutation({
            query: (body) => ({
                url: `banners/`,
                method: "POST",
                body,
            }),
            invalidatesTags: ['Banners'],
        }),
        updateBanners: builder.mutation({
            query: (body) => ({
                url: `banners/${body.get('id')}/`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ['Banners'],
        }),
        deleteBanners: builder.mutation({
            query: (body) => ({
                url: `banners/${body.id}`,
                method: 'DELETE',
                body,
            }),
            invalidatesTags: ['Banners']
        }),
    }),
});

export const {
  useGetBannersQuery,
  useCreateBannersMutation,
  useDeleteBannersMutation,
  useUpdateBannersMutation,    
} = BannersCrud;