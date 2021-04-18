import { IHttpClient } from '../../../../types'
import Axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { ApiError } from '../errors'

export class HttpClient implements IHttpClient {
  protected api: string = process.env.REACT_APP_BOOKS_SERVICE_URL || 'http://localhost:3000'

  public get<T>(endpoint: string): Promise<T> {
    return Axios.get(`${this.api}/${endpoint}`, {
      ...this.getRequestConfig()
    })
      .then(({ data, ...request }) => ({ ...data, status: request.status }))
      .catch(error => {
        return this.errorParser(error, endpoint)
      })
  }

  protected getRequestConfig(): AxiosRequestConfig {
    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return config
  }

  protected errorParser(error: AxiosError, endpoint: string): Error {
    let message: string
    let statusCode: number | undefined
    if (!error.response || !error.response.data) {
      message = `Api client error - ${error.toString()}`
    } else {
      statusCode = error.response.status
      message = error.response.data.detail
    }
    throw ApiError.invalidResponse({ message, statusCode, endpoint })
  }
}
