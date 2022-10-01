const { gql } = require("apollo-server")

const typeDefs = gql`
  type Query {
    "Query field to get tracks array for the homepage grid = field that returns a list of Track objects."
    tracksForHome: [Track!]!
    "For the fun of comparing, here is the fetch implementation below. Added a new field called tracksforHomeFetch to our schema. The resolvers are using node-fetch instead of the RESTDataSource, for each call, the response takes the same amount of time, about half a second."
    tracksForHomeFetch: [Track!]!
    "entry point to our API which will return a single Track, provided a track's ID"
    track(id: ID!): Track
  }
  # another example: missions(to: String, scheduled: Boolean): [Mission]

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
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of Modules"
    modules: [Module!]!
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }

  "a single track might include any number of modules, and one module might be part of multiple tracks. So, we'll create a separate Module type. A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in minutes"
    length: Int
  }
`

module.exports = typeDefs
