import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_HUSTLEHIVE_API,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token")

    if (!token) {
      if (window.location.pathname !== "/") {
        window.location.href = "/"
      }
      return;
    }

    headers.set("Authorization", `Bearer ${token}`)

    return headers
  }
})

export const authorizedBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status == 401) {
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    localStorage.removeItem("user_id")
    if (window.location.pathname !== "/") {
      window.location.href = "/"
    }
  }

  return result
}