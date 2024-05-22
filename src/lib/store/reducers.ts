import * as apis from './api'
import * as slices from './slices'

export const reducers = {
    counter: slices.counterReducer,
    [apis.loginApi.reducerPath]: apis.loginApi.reducer,
    [apis.baseAuthorizedApi.reducerPath]: apis.baseAuthorizedApi.reducer
}