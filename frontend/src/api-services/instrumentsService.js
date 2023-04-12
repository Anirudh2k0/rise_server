import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '@/data/config';

const endpoint = config.apiEndpoint + '/instruments';

export const instrumentsApi = createApi({
  reducerPath: 'instrumentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: endpoint, headers: config.headers }),
  endpoints: (builder) => ({
    getInstruments: builder.query({
      query: () => {
        return {
          url: endpoint,
          method: 'GET',
        };
      },
      providesTags: ['Instrument'],
    }),

    postInstrument: builder.mutation({
      query: (instrument) => {
        return {
          url: endpoint,
          method: 'POST',
          body: instrument,
        };
      },
      invalidatesTags: ['Instrument'],
    }),

    updateInstrument: builder.mutation({
      query: (instrument) => {
        return {
          url: endpoint,
          method: 'PUT',
          body: instrument,
        };
      },
      invalidatesTags: ['Instrument'],
    }),

    deleteInstrument: builder.mutation({
      query: (id) => {
        return {
          url: endpoint + '/' + id,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Instrument'],
    }),
  }),
});

export const {
  useGetInstrumentsQuery,
  usePostInstrumentMutation,
  useUpdateInstrumentMutation,
  useDeleteInstrumentMutation,
} = instrumentsApi;
