import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
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
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      database: 'Books'
    }),
    BooksModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
