import React from "react"
import ReactDOM from "react-dom"
import GlobalStyles from "./styles"
import Pages from "./pages"
// We first need to install two packages: graphql and @apollo/client
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

const client = new ApolloClient({
  // the location of our GraphQL server.
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
)
