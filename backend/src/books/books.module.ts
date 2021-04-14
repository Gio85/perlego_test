import { Module } from '@nestjs/common'
import { BooksService } from './books.service'
import { BookController } from './book.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Book } from './books.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BooksService],
  controllers: [BookController]
})
export class BooksModule {}
