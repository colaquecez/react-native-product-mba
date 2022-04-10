import { emptySplitApi } from '../basequery';
import {
  IProductGetAllDTO,
  IProductGetAllResponse,
  IProductSelect
} from './Product.types';

export const productApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getAll: builder.query<IProductGetAllResponse, IProductGetAllDTO>({
      providesTags: ['Product'],
      query: ({ page, perPage, orderDirection }) =>
        `/storeProducts/?page=${page}&perPage=${perPage}&orderDirection=${orderDirection}`
    }),
    getAllFavorites: builder.query<IProductGetAllResponse, void>({
      providesTags: ['Product'],
      query: () => `storeProducts/getFavProducts`
    }),
    storeProducts: builder.query<IProductSelect, { id: string }>({
      providesTags: ['Product'],
      query: ({ id }) => `storeProducts/product/${id}`
    }),
    manageFavorite: builder.mutation<any, { productID: string }>({
      invalidatesTags: ['Product'],
      query({ productID }) {
        return {
          method: 'POST',
          url: `storeProducts/manageFavorite`,
          body: {
            productID
          }
        };
      }
    })
  })
});

export const {
  useManageFavoriteMutation,
  useGetAllQuery,
  useGetAllFavoritesQuery,
  useLazyGetAllQuery,
  useStoreProductsQuery,
  useLazyStoreProductsQuery
} = productApi;
