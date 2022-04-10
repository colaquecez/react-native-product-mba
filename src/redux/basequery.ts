import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'src/redux/store';

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fiap-reactjs-presencial.herokuapp.com',
    prepareHeaders: async (headers, { getState }) => {
      const { token } = (getState() as RootState).auth;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: () => ({}),
  reducerPath: 'mbaApi',
  tagTypes: ['Product']
});
