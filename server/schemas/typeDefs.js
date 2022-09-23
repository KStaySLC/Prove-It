const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    posts: [Post]!
  }
  type Post {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
  }
  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(thoughtId: ID!): Post
  }
`

module.exports = typeDefs;