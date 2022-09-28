/* On the backend side, our first goal is to create a GraphQL server that can:
Receive an incoming GraphQL query from our client
Validate that query against our newly created schema
Populate the queried schema fields with mocked data
Return the populated fields as a response */

const { ApolloServer } = require("apollo-server")
const typeDefs = require("./schema")

// From the /server terminal, we'll launch our server with npm run start
// it would be great to be able to send the server a test query and get a valid response: use mock data = true for placeholders

const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(6)],
  }),
  Track: () => ({
    id: () => "track_01",
    title: () => "Astro Kitty, Space Explorer",
    author: () => {
      return {
        name: "Grumpy Cat",
        photo:
          "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
      }
    },
    thumbnail: () =>
      "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 1210,
    modulesCount: () => 6,
  }),
}

// Create an instance of the ApolloServer class and pass it our typeDefs in its options object:
const server = new ApolloServer({
  typeDefs,
  mocks,
})

server.listen().then(() => {
  console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
      📭  Query at http://localhost:4000
  `)
})
