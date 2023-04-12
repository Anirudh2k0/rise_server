import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '@/data/config';

const endpoint = config.apiEndpoint + '/auth';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: endpoint }),
  endpoints: (builder) => ({
    loginUser: builder.query({
      query: (loginCredentials) => {
        return {
          url: endpoint + '/login',
          method: 'POST',
          body: loginCredentials,
        };
      },
    }),
    registerUser: builder.query({
      query: (loginCredentials) => {
        return {
          url: endpoint + '/register',
          method: 'POST',
          body: loginCredentials,
        };
      },
    }),
  }),
});

export const { useLazyLoginUserQuery, useLazyRegisterUserQuery } = authApi;
