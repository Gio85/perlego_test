import { BooksService } from './books.service'
import { Book } from './books.entity'
import { Connection, createConnection, Repository } from 'typeorm'
import { IBook } from '../types'

describe('BooksController', () => {
  let db: Connection
  let booksService: BooksService
  let booksRepository: Repository<Book>
  let books: IBook[]

  beforeAll(async () => {
    db = await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      entities: [Book],
      database: 'Books'
    })
    booksRepository = db.getRepository(Book)
    booksService = new BooksService(booksRepository)
    books = await booksService.getBooks()
  })

  afterAll(() => db.close())

  it('should return all the books', async () => {
    expect(books.length).toBe(50)
  })

  it('should confirm the type of the keys', async () => {
    books.map(book => {
      expect(typeof book.id === 'number').toBe(true)
    })
  })

  it('should check the shape of the book', async () => {
    books.map(book => {
      expect(book).toHaveProperty('id')
      expect(book).toHaveProperty('Location')
      expect(book).toHaveProperty('ProductIdentifier_ISBN13_IDValue')
      expect(book).toHaveProperty(
        'Title_DistinctivetitlebookCovertitle_TitleText'
      )
      expect(book).toHaveProperty(
        'Title_DistinctivetitlebookCovertitle_Subtitle'
      )
      expect(book).toHaveProperty('Publisher_PublisherName')
      expect(book).toHaveProperty('Product_PublicationDate')
      expect(book).toHaveProperty('Language_Languageoftext_LanguageCode')
      expect(book).toHaveProperty('Contributor1_PersonName')
      expect(book).toHaveProperty('Contributor2_PersonName')
      expect(book).toHaveProperty('Contributor3_PersonName')
      expect(book).toHaveProperty('OtherText_Maindescription_Text')
      expect(book).toHaveProperty('Cover_File')
      expect(book).toHaveProperty('Unique_URL')
    })
  })
})
