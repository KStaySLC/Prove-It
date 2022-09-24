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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(thoughtId: ID!): Post
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
  }
`

module.exports = typeDefs;