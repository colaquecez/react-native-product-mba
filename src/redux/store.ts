import { configureStore } from '@reduxjs/toolkit';

import { authApi } from './Auth/Auth.api';
import AuthSliceReducer from './Auth/Auth.slice';
import { productApi } from './Product/Product.api';

const middleware = [authApi.middleware, productApi.middleware];

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    auth: AuthSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middleware)
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
