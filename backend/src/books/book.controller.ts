import { Controller, Get } from '@nestjs/common'
import { BooksService } from './books.service'

@Controller('/')
export class BookController {
  constructor(private service: BooksService) {}

  @Get()
  get() {
    return this.service.getBooks()
  }
}
