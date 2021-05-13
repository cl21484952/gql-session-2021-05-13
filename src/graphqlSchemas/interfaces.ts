import { IAuthor, IPost } from '../data'

export interface IGQLContext {
  db: {
    authors: IAuthor[]
    posts: IPost[]
  }
}

export interface IPagination {
  offset: number
  limit: number
}
