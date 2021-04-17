import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from '../src/app.module'
import { IBook } from '../src/types'

describe('AppController (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterAll(async () => {
    await app.close()
  })

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(r => {
        const books: IBook[] = r.body
        expect(books.every(book => book.id)).toBeDefined()
      })
  })

  it('/ (POST)', () => {
    return request(app.getHttpServer())
      .post('/')
      .expect(404)
  })
})
