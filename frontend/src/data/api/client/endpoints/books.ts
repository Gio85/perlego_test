import { ENDPOINT, IApiResponse, IBook, IHttpClient } from '../../../../types'

export class BooksEndpoint {
  public path = `${ENDPOINT.BOOKS}`
  constructor(protected readonly client: IHttpClient) {}

  /**
   * This method will return the list of books
   */
  public getBooks(): Promise<IApiResponse<IBook[]> | Error> {
    return this.client.get<IBook[]>(`${this.path}`)
  }
}
