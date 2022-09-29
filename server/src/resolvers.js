// Our resolvers object's keys will correspond to our schema's types and fields.

const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    // get all tracks, will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome()
    },
  },
  Track: {
    // highlight-start
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId)
      // highlight-end
    },
  },
}

module.exports = resolvers
