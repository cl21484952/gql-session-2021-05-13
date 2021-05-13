# Graphql Session

## What is `Graphql`?

It is another way of getting data over RESTFUL

### Traditionally

Will need to call multiple endpoint

```typescript
import axios from 'axios'

interface IAuthor {
  id: number
  firstName: string
  lastName: string
}
interface IPost {
  id: number
  authorId: number
  title: string
  votes: number
}
const res = await axios.get('post')
const postList: IPost[] = res.data
const authorList: IAuthor[] = await Promise.all(
  postList.map((element) => {
    return axios.get(`author/${element.authorId}`)
  }),
)
const postZipped = postList.map((element, index) => {
  return {
    ...element,
    author: authorList[index],
  }
})
// Final example
const results = [
  {
    id: 1,
    authorId: 1,
    title: 'Amelia',
    vote: 0,
    author: {
      id: 1,
      firstname: 'Amelia',
      lastname: 'Watson',
    },
  },
]
```

### Graphql

Will need to call multiple endpoint

```typescript
import axios from 'axios'

const query = `
{
  listPost {
    id
    authorId
    title
    votes
    author {
      id
      firstName
      lastName
    }
  }
}
`

const res = await axios.post('graphql', { query })
// res.data.data
// Final example
const results = [
  {
    id: 1,
    authorId: 1,
    title: 'Amelia',
    vote: 0,
    author: {
      id: 1,
      firstname: 'Amelia',
      lastname: 'Watson',
    },
  },
]
```

# Lodash Session

## What is `Lodash`?

it is a library that helps with common everything operation with string array or objects

### Example Use Case 1: Split array into size of 2 or less, for printing PDF

```typescript
import _ from 'lodash'
const data = [
  {
    id: 1,
    name: 'Bio wood Teal',
  },
  {
    id: 2,
    name: 'Yellow wood',
  },
  {
    id: 3,
    name: 'Planks',
  },
]

const results = _.chunk(data, 2)
console.log(results)
// [
//   // Chunk 1
//   [
//     {
//       id: 1,
//       name: 'Bio wood Teal',
//     },
//     {
//       id: 2,
//       name: 'Yellow wood',
//     },
//   ],
//   // Chunk 2
//   [
//     {
//       id: 3,
//       name: 'Planks',
//     },
//   ],
// ]
```

### Example Use Case 2: Check if variable is null or undefined

```typescript
function example_native(args: { name: number | string | null | undefined }) {
  if (args.name === null || typeof args.name === 'undefined') {
    return 'Name is not provided!'
  }

  return `Hi ${args.name}`
}
example_native({ name: 0 })
// Hi 0
example_native({ name: 'Amelia Watson' })
// Hi Amelia Watson
example_native({ name: null })
// Name is not provided!
example_native({})
// Name is not provided!
```

```typescript
import _ from 'lodash'
function example_lodash(args: { name: number | string | null | undefined }) {
  if (_.isNil(args.name)) {
    return 'Name is not provieded!'
  }

  return `Hi ${args.name}`
}
example_lodash({ name: 0 })
// Hi 0
example_lodash({ name: 'Amelia Watson' })
// Hi Amelia Watson
example_lodash({ name: null })
// Name is not provided!
example_lodash({})
// Name is not provided!
```

## What about writing them ourselves?

There are entire repo dedicated to examples for avoid using
lodash [HERE](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore).
