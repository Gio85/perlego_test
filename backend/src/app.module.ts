import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BooksModule } from './books/books.module'
import { Book } from './books/books.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      entities: [Book],
      database: 'Books'
    }),
    BooksModule
  ]
})
export class AppModule {}
