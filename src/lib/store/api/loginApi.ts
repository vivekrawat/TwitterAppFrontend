// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_HUSTLEHIVE_API }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<{token_type: string},{item: string}>({
        query: (data) => ({
            url: "/api/auth/login",
            method: "post",
            body: data,
        })
    }),
    createUser: builder.mutation<{item: string}, {item: string}>({
      query: (data) => ({
          url: "/api/users",
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
    useCreateUserMutation
} = loginApi