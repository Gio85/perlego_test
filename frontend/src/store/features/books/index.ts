import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IApiResponse, IBook, IBookStore, IThunk } from '../../../types'
import { ApiClient } from '../../../data/api/client'

const defaultState: IBookStore = {
  data: null,
  error: null
}

export const booksSlice = createSlice({
  name: 'books',
  initialState: defaultState,
  reducers: {
    setBooksAction: (store: IBookStore, action: PayloadAction<IBook[]>): void => {
      store.data = action.payload
    },
    setErrorAction: (store: IBookStore, action: PayloadAction<string>): void => {
      store.error = action.payload
    },
    clearBookAction: (store: IBookStore): void => {
      store.data = defaultState.data
      store.error = defaultState.error
    }
  }
})

export const { setBooksAction, clearBookAction, setErrorAction } = booksSlice.actions

export const getBooksThunk = (): IThunk => async dispatch => {
  try {
    const client = await ApiClient.getInstance()
    const { data } = await client.books.getBooks() as IApiResponse<IBook[]>
    dispatch(setBooksAction(data))
  } catch (e) {
    dispatch(setErrorAction(e.message))
    console.error(e)
  }
}
