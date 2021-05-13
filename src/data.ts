export interface IAuthor {
  id: number
  firstName: string
  lastName: string
}
export interface IPost {
  id: number
  authorId: number
  title: string
  votes: number
}

export const authors: IAuthor[] = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
]
export const posts: IPost[] = [
  { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
  { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },
  { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
  { id: 4, authorId: 2, title: 'Launchpad is Cool', votes: 7 },
  { id: 5, authorId: 2, title: 'Demo123', votes: 6 },
  { id: 6, authorId: 2, title: 'Ievuksl', votes: 2 },
  { id: 7, authorId: 2, title: 'Ievuksl', votes: 2 },
]
