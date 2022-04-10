import { emptySplitApi } from 'src/redux/basequery';
import {
  SignInDTO,
  SignInResponse,
  SignUpDTO,
  SignUpResponse
} from './Auth.types';

export const authApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<SignInResponse, SignInDTO>({
      query(body) {
        return {
          body,
          method: 'POST',
          url: 'storeProducts/login'
        };
      }
    }),
    signUp: builder.mutation<SignUpResponse, SignUpDTO>({
      query(body) {
        return {
          body,
          url: 'storeProducts/signup',
          method: 'PUT'
        };
      }
    })
  })
});

export const { useSignInMutation, useSignUpMutation } = authApi;
