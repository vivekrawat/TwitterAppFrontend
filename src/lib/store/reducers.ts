import * as apis from './api'
import * as slices from './slices'

export const reducers = {
    counter: slices.counterReducer,
    uiItems: slices.uiItemsReducer,
    [apis.authApi.reducerPath]: apis.authApi.reducer,
    [apis.baseAuthorizedApi.reducerPath]: apis.baseAuthorizedApi.reducer
}