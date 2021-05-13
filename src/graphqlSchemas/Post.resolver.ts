import { IResolvers } from 'graphql-tools'
import { IPost } from '../data'
import { IGQLContext, IPagination } from './interfaces'

const Post: IResolvers<IPost, IGQLContext> = {
  author: async (src, _args, { db }, _info) => {
    const authorOne = db.authors.find((element) => {
      return element.id === src.authorId
    })

    return authorOne
  },
}

const rootQuery: IResolvers<any, IGQLContext> = {
  post: async (_src, { id }: { id: number | string }, { db }, _info) => {
    const postOne = db.posts.find((element) => {
      return element.id === id
    })

    return postOne
  },
  listPost: async (_src, { offset, limit }: IPagination, { db }, _info) => {
    return db.posts.slice(offset, offset + limit + 1)
  },
}

const rootMutation: IResolvers<any, IGQLContext> = {
  postPost: async (_src, { authorId, title }: { authorId: number; title: string }, { db }, _info) => {
    const newPost: IPost = {
      id: Math.random() * (Number.MAX_SAFE_INTEGER - 1) + 1,
      authorId: authorId,
      title: title,
      votes: 0,
    }
    db.posts.push(newPost)
    return newPost
  },

  putPost: async (_src, { id, title }: { id: number | string; title: string }, { db }, _info) => {
    const postOne = db.posts.find((element) => {
      return element.id === id
    })

    if (postOne) {
      postOne.title = title
    }

    return postOne
  },
}

const Resolver: IResolvers<any, IGQLContext> = {
  Query: rootQuery,
  Mutation: rootMutation,
  Post,
}
export default Resolver
