import React from 'react'
import { IBook } from '../../../types'
import { Books, Book, Cover, BookTitle, BookContributor } from '../../style'

const BASE_URL = 'https://www.perlego.com'

interface IProps {
  data: IBook[]
}

export const BooksList: React.FC<IProps> = (props): React.ReactElement => {
  const { data } = props
  return (
    <Books>
      {data &&
        data.map((book, i) => (
          <Book key={i}>
            <Cover src={`${BASE_URL}/${book.Location}${book.Cover_File}`} alt="book image" />
            <BookTitle>{book.Title_DistinctivetitlebookCovertitle_TitleText}</BookTitle>
            <BookContributor>{book.Contributor1_PersonName}</BookContributor>
          </Book>
        ))}
    </Books>
  )
}
