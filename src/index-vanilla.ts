import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { executableSchema } from './graphqlSchemas/init-schema'
import { posts, authors } from './data'

async function prepareApp() {
  let app = express()

  // Prepare Graphql middleware
  const server = new ApolloServer({
    schema: executableSchema,
    playground: true,
    context: {
      db: {
        authors: authors,
        posts: posts,
      },
    },
  })
  await server.start()
  server.applyMiddleware({ app, path: '/graphql' })

  return {
    app,
    server,
  }
}

prepareApp().then(async ({ app }) => {
  await new Promise<void>((resolve) => app.listen({ port: 4000 }, resolve))
  console.log('Running a GraphQL API server at localhost:4000/graphql')
})
