import React from 'react'
import { BooksList } from '../features/books/BooksList'
import { useDispatch, useSelector } from 'react-redux'
import { IRootStore } from '../../types'
import { getBooksThunk } from '../../store/features/books'
import { Title } from '../style'

export const Home: React.FC = () => {
  const dispatch = useDispatch()
  const data = useSelector((store: IRootStore) => store.books.data)

  if (!data) dispatch(getBooksThunk())

  return (
    <>
      <Title>Books You Might Like</Title>
      {data && <BooksList data={data} />}
    </>
  )
}
