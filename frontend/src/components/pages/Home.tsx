import React from 'react'
import { BooksList } from '../features/books/BooksList'
import { useDispatch, useSelector } from 'react-redux'
import { IRootStore } from '../../types'
import { getBooksThunk } from '../../store/features/books'

export const Home: React.FC = () => {
  const dispatch = useDispatch()
  const data = useSelector((store: IRootStore) => store.books.data)

  if (!data) dispatch(getBooksThunk())

  return (
    <>
      <h1>Books You Might Like</h1>
      {data && <BooksList data={data} />}
    </>
  )
}
