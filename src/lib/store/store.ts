import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { reducers } from './reducers'
import { middlewares } from './middlewares'
// ...

export const store = configureStore({
  reducer: {...reducers},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()