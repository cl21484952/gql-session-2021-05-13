import { IResolvers } from 'graphql-tools'

import { IGQLContext, IPagination } from './interfaces'
import { IAuthor } from '../data'

const Author: IResolvers<IAuthor, IGQLContext, IPagination> = {
  postCount: async ({ id }: { id: number }, _args, { db }, _info): Promise<number> => {
    const postCount = db.posts.filter((element) => {
      return element.authorId === id
    }).length

    return postCount
  },
  posts: async ({ id }: { id: number }, { offset, limit }, { db }, _info) => {
    const postList = db.posts
      .filter((element) => {
        return element.authorId === id
      })
      .slice(offset, offset + limit + 1)

    return postList
  },
}

const rootMutation: IResolvers<any, IGQLContext> = {
  postAuthor: async (
    _src,
    { firstName, lastName }: { firstName: string; lastName: string },
    { db },
    _info,
  ): Promise<IAuthor> => {
    const newAuthor = {
      id: Math.random() * (Number.MAX_SAFE_INTEGER - 1) + 1,
      firstName: firstName,
      lastName: lastName,
    }
    db.authors.push(newAuthor)

    return newAuthor
  },
  putAuthor: async (
    _src,
    { id, firstName, lastName }: { id: string | number; firstName: string; lastName: string },
    { db },
  ) => {
    const authorOne = db.authors.find((element) => {
      return element.id === id
    })

    if (authorOne) {
      authorOne.firstName = firstName
      authorOne.lastName = lastName
    }

    return authorOne
  },
}

const rootQuery: IResolvers<any, IGQLContext> = {
  author: async (_src, { id }: { id: string }, { db }, _info) => {
    console.log({id})
    const authorObj =
      db.authors.find((element) => {
        return element.id === parseInt(id)
      }) || null
    return authorObj
  },
  listAuthor: async (_src, { limit, offset }: IPagination, { db }, _info) => {
    return db.authors.slice(offset, offset + limit + 1)
  },
}

const Resolver: IResolvers<any, IGQLContext> = {
  Query: rootQuery,
  Mutation: rootMutation,
  Author,
}
export default Resolver
