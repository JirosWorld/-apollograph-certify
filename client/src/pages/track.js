import React from 'react'
// always import this first
import { gql, useQuery } from '@apollo/client'
// following is needed to show the JSON data as actual component
// useQuery is the primary API to execute queries in our frontend app
import { Layout, QueryResult } from '../components'
import TrackDetail from '../components/track-detail'

// We wrap our query string in the gql template literal and then send it to our server with ApolloClient's useQuery hook.
// The trackId variable we need is part of the router path when we set it up as /track/:trackId.
export const GET_TRACK = gql`
    query GetTrack($trackId: ID!) {
      track(id: $trackId) {
        id
        title
        author {
          id
          name
          photo
        }
        thumbnail
        length
        modulesCount
        numberOfViews
        modules {
          id
          title
          length
        }
        description
      }
}
`

// We'll declare a functional component that takes a trackId destructured from the props input. This prop will be coming as a parameter from the route, or the browser's URL, which we'll set up later.
const Track = ({ trackId }) => {

  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId }
  })

  return <Layout>
    <QueryResult error={error} loading={loading} data={data}>
      {/* this is where our component displaying the data will go // we can render the TrackDetail component and set the track prop to data?.track, using optional chaining here since the data won't be available until the query is finished loading. */}
      <TrackDetail track={data?.track} />
    </QueryResult>
  </Layout>
}

export default Track