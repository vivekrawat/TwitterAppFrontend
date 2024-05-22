// Need to use the React-specific entry point to import createApi
import { baseAuthorizedApi } from './baseAuthorizedApi'
import { User} from '@/types'


// Define a service using a base URL and expected endpoints
export const userApi = baseAuthorizedApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllFreelancers: builder.query<User[], void>({
      query: () => `/api/users?is_freelancer=true`,
      providesTags: ["User"]
    }),
    fetchUserById: builder.query<string, string>({
      query: (id) => `/api/users/${id}`,
      providesTags: ["User"]
    }),
    updateUserById: builder.mutation<string, { user_id: string, data:string }>({
      query: ({ user_id, data }) => ({
        url: `/api/users/${user_id}`,
        method: "put",
        body: data
      }),
      invalidatesTags: ["User"]
    })
  })
})


export const {
  useFetchAllFreelancersQuery,
  useFetchUserByIdQuery,
  useLazyFetchUserByIdQuery,
  useUpdateUserByIdMutation
} = userApi