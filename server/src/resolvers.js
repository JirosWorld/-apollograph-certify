// Our resolvers object's keys will correspond to our schema's types and fields.
// a resolver looks like this:
// /* (parent, args, context, info) => {} */

const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    // get all tracks, will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome()
    },
    // In our schema, we named the fieldtrack, so here it has to have the same name.
    track: (parent, { id }, { dataSources }, info) => {
      return dataSources.trackAPI.getTrack(id)
    },
    /* "For the fun of comparing, here is the fetch implementation below. 
    Added a new field called tracksforHomeFetch to our schema first. This resolver uses node-fetch instead of the RESTDataSource, 
    for each call, the response takes the same amount of time, about half a second."  */
    // tracksForHomeFetch: async () => {
    //   const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com"
    //   const res = await fetch(`${baseUrl}/tracks`)
    //   return res.json()
    // },
  },
  Track: {
    // using fetch instead of dataSources
    // author: async ({ authorId }, _, { dataSources }) => {
    //     const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
    //     const res = await fetch(`${baseUrl}/author/${authorId}`);
    //     return res.json();
    // highlight-start
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId)
      // highlight-end
    },
    // CHAINING: create a resolver for Track.modules
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id)
    },
  },
}

module.exports = resolvers
