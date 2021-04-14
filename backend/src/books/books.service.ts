import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Book } from './books.entity'

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>
  ) {}

  async getBooks(): Promise<Book[]> {
    return this.booksRepository.find()
  }
}
