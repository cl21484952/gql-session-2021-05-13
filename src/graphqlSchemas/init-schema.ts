import { loadSchemaSync, GraphQLFileLoader } from 'graphql-tools'

import AuthorResolver from './Author.resolver'
import PostResolver from './Post.resolver'

export const executableSchema = loadSchemaSync(
  [
    // Load graphql pattern
    'src/graphqlSchemas/Author.gql',
    'src/graphqlSchemas/Post.gql',
  ],
  {
    loaders: [
      // File loader
      new GraphQLFileLoader(),
    ],
    resolvers: [
      // Resolvers
      AuthorResolver,
      PostResolver,
    ],
  },
)
