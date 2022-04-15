/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './Auth.api';

const initialState = {
  name: '',
  phone: '',
  token: '',
  userId: null,
  validated: false
};

const AuthSliceReducer = createSlice({
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.signIn.matchFulfilled,
      (state, action) => {
        state.token = action.payload.token;
        state.validated = !!action.payload.token;
        state.name = action.payload.name;
        state.userId = action.payload.userId;
        state.phone = action.payload.phone;
      }
    );
  },
  name: 'authSlice',
  initialState,
  reducers: {
    logoutAction: (state) => {
      state.token = '';
      state.validated = false;
      state.name = '';
      state.userId = '';
      state.phone = '';
    }
  }
});

export const { logoutAction } = AuthSliceReducer.actions;
export default AuthSliceReducer.reducer;
