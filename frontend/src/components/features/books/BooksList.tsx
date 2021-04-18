import React from 'react'
import { IBook } from '../../../types'

interface IProps {
  data: IBook[]
}

export const BooksList: React.FC<IProps> = (props): React.ReactElement => {
  console.log('props >>> ', props)
  return (
      <div>Books</div>
  )
}
