import { HttpClient } from './http'
import { BooksEndpoint } from './endpoints/books'

export class ApiClient {
  private static instance: ApiClient
  public httpClient: HttpClient
  public books: BooksEndpoint

  protected constructor() {
    this.httpClient = new HttpClient()
    this.books = new BooksEndpoint(this.httpClient)
  }

  public static async getInstance(): Promise<ApiClient> {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient()
    }
    return ApiClient.instance
  }
}
