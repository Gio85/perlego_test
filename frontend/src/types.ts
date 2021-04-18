import { Action, ThunkAction } from '@reduxjs/toolkit'

export interface IApiResponse<T> {
  data: T
  status: number
}

export interface IHttpClient {
  get<T>(path: string, parameters?: unknown): Promise<IApiResponse<T> | Error>
}


export interface IApiError {
  message: string
  endpoint: string
  statusCode?: number
}

export enum ENDPOINT {
  BOOKS = '/'
}

export interface IBook {
  id: number
  Location: string
  ProductIdentifier_ISBN13_IDValue: string
  Title_DistinctivetitlebookCovertitle_TitleText: string
  Title_DistinctivetitlebookCovertitle_Subtitle: string
  Publisher_PublisherName: string
  Product_PublicationDate: string
  Language_Languageoftext_LanguageCode: string
  Contributor1_PersonName: string
  Contributor2_PersonName: string
  Contributor3_PersonName: string
  OtherText_Maindescription_Text: string
  Cover_File: string
  Unique_URL: string
}

export enum ROUTE {
  HOME = '/'
}

export interface IStoreError {
  error: string | null
}

export interface IBookStore extends IStoreError {
  data: IBook[] | null
}

export interface IRootStore {
  books: IBookStore
}

export type IThunk = ThunkAction<void, IRootStore, unknown, Action<string>>
