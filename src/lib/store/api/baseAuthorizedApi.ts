// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react'
import { authorizedBaseQuery } from './authorizedBaseQuery'


// Define a service using a base URL and expected endpoints
export const baseAuthorizedApi = createApi({
  reducerPath: 'baseAuthorizedApi',
  baseQuery: authorizedBaseQuery,
  endpoints: () => ({}),
  tagTypes: ["User", "Project"]
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints