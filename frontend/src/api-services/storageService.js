import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '@/data/config';

const endpoint = config.apiEndpoint + '/storage';

export const storageApi = createApi({
  reducerPath: 'storageApi',
  baseQuery: fetchBaseQuery({ baseUrl: endpoint, headers: config.headers }),
  endpoints: (builder) => ({
    getStorage: builder.query({
      query: () => {
        return {
          url: endpoint,
          method: 'GET',
        };
      },
      providesTags: ['Storage'],
    }),

    postStorage: builder.mutation({
      query: (storage) => {
        return {
          url: endpoint,
          method: 'POST',
          body: storage,
        };
      },
      invalidatesTags: ['Storage'],
    }),

    updateStorage: builder.mutation({
      query: (storage) => {
        return {
          url: endpoint,
          method: 'PUT',
          body: storage,
        };
      },
      invalidatesTags: ['Storage'],
    }),

    deleteStorage: builder.mutation({
      query: (id) => {
        return {
          url: endpoint + '/' + id,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Storage'],
    }),
  }),
});

export const {
  useGetStorageQuery,
  usePostStorageMutation,
  useUpdateStorageMutation,
  useDeleteStorageMutation,
} = storageApi;
