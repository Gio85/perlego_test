import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { booksSlice } from './features/books'

export const store = configureStore({
  reducer: combineReducers({
    [booksSlice.name]: booksSlice.reducer
  })
})
