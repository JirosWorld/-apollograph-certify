// first we need to install 2 dependencies INSIDE the Server dir:
/* graphql will help us navigate through the Nodes and Edges of the data graph
= core logic for parsing and validating GraphQL queries
Apollo will give us the template literal gql syntax */

const { gql } = require("apollo-server")

const typeDefs = gql`
  # Schema definitions go here
  type Query {
    "Get non-nullable tracks array for homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`
module.exports = typeDefs