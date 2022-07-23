import { configureStore } from '@reduxjs/toolkit'
import quizReducer from '../features/quiz/quizSlice'
import createSagaMiddleware from 'redux-saga'
import { Platform } from 'react-native'

const sagaMiddleware = createSagaMiddleware()

const middlewares = []

if (!(Platform.OS === 'web' && __DEV__)) {
  const createDebugger = require('redux-flipper').default
  middlewares.push(createDebugger())
}

middlewares.push(sagaMiddleware)

export const store = configureStore({
  reducer: { quiz: quizReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
  devTools: true,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
