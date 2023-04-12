import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '@/data/config';

const endpoint = config.apiEndpoint + '/projects';

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({ baseUrl: endpoint, headers: config.headers }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => {
        return {
          url: endpoint,
          method: 'GET',
        };
      },
      providesTags: ['Project'],
    }),

    postProject: builder.mutation({
      query: (project) => {
        return {
          url: endpoint,
          method: 'POST',
          body: project,
        };
      },
      invalidatesTags: ['Project'],
    }),

    updateProject: builder.mutation({
      query: (project) => {
        return {
          url: endpoint,
          method: 'PUT',
          body: project,
        };
      },
      invalidatesTags: ['Project'],
    }),

    deleteProject: builder.mutation({
      query: (id) => {
        return {
          url: endpoint + '/' + id,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Project'],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  usePostProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectsApi;
