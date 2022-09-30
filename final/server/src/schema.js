const { gql } = require("apollo-server")

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    "For the fun of comparing, here is the fetch implementation below. Added a new field called tracksforHomeFetch to our schema. The resolvers are using node-fetch instead of the RESTDataSource, for each call, the response takes the same amount of time, about half a second."
    tracksForHomeFetch: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main Author"
    author: Author!
    "The track's illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }
`

module.exports = typeDefs
