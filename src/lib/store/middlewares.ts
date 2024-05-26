import * as apis from "./api"

export const middlewares = [
    apis.authApi.middleware,
    apis.baseAuthorizedApi.middleware
]