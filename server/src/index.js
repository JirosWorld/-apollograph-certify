const { ApolloServer } = require("apollo-server")
const resolvers = require("./resolvers")
// just below our resolvers import, we'll require track-api, our data source file (extending RESTDataSource), and call it TrackAPI
const TrackAPI = require("./datasources/track-api")
const typeDefs = require("./schema")

//  replace our mocks with resolvers.

// const mocks = {
//   Query: () => ({
//     tracksForHome: () => [...new Array(9)],
//   }),
//   Track: () => ({
//     id: () => 'track_01',
//     title: () => 'Astro Kitty, Space Explorer',
//     author: () => {
//       return {
//         name: 'Grumpy Cat',
//         photo: 'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
//       };
//     },
//     thumbnail: () => 'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
//     length: () => 1210,
//     modulesCount: () => 6,
//   }),
// };

const server = new ApolloServer({
  typeDefs,
  // mocks,
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    }
  },
})

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
`)
})
