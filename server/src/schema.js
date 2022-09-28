// first we need to install 2 dependencies INSIDE the Server dir:
/* graphql will help us navigate through the Nodes and Edges of the data graph
= core logic for parsing and validating GraphQL queries
Apollo will give us the template literal gql syntax */

const { gql } = require("apollo-server")

const typeDefs = gql`
  # Schema definitions go here
  type Query {
    "Get non-nullable tracks array for homepage grid"
    spaceCats: [SpaceCat]
  }

  "A track is a group of Modules that teaches about a specific topic, in PascalCase"
  type SpaceCat {
    id: ID!
    "The track's title"
    name: String!
    age: Int
    "The track's missions"
    missions: [Mission]
  }

  "missions of a complete Track"
  type Mission {
    id: ID!
    "missions name"
    name: String!
    description: String!
  }
`
module.exports = typeDefs
