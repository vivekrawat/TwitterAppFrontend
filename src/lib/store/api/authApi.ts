// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginSuccess, RegisterType, LoginType, CreateSuccess } from '@/types'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_TWITTER_API }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginSuccess,LoginType>({
        query: (data) => ({
            url: "/auth/login",
            method: "post",
            body: data,
        })
    }),
    registerUser: builder.mutation<CreateSuccess, RegisterType>({
      query: (data) => ({
          url: "/auth/signup",
          method: "post",
          body: data
      }),
      invalidatesTags: ["User"]
  })
  }),
  tagTypes: ["User"]
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useLoginUserMutation,
    useRegisterUserMutation
} = authApi