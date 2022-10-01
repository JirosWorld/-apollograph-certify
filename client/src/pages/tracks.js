import React from "react"
import { useQuery, gql } from "@apollo/client"
import TrackCard from "../containers/track-card"
// to make errors and Loader prettier
import { Layout, QueryResult } from "../components"

/* TRACKS GraphQL query includes a tracksForHome key, which contains the array of tracks.
To create one card per track, we'll map through the tracksForHome array and return a TrackCard component with 
its corresponding track data as its prop: */

/** TRACKS gql query to retreive all tracks */
const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  // use the destructured constants from usequery hook
  const { loading, error, data } = useQuery(TRACKS)

  return (
    <Layout grid>
      {/* // optional chain question mark operator */}
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track, index) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  )
}

export default Tracks
