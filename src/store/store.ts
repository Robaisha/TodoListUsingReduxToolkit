import { configureStore } from '@reduxjs/toolkit'
import TodoItemSlice from './reducer/TodoItemSlice'

export const store = configureStore({
  reducer: {TodoItem:TodoItemSlice},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch