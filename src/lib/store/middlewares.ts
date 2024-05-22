import * as apis from "./api"

export const middlewares = [
    apis.loginApi.middleware,
    apis.baseAuthorizedApi.middleware
]