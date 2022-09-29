import React from "react"
// always import this first
import { gql, useQuery } from "@apollo/client"
// following is needed to show the JSON data as actual component
// useQuery is the primary API to execute queries in our frontend app
import TrackCard from "../containers/track-card"
import { Layout } from "../components"
// to make errors and Loader prettier
import QueryResult from "../components/query-result"

/* TRACKS GraphQL query includes a tracksForHome key, which contains the array of tracks.
To create one card per track, we'll map through the tracksForHome array and return a TrackCard component with 
its corresponding track data as its prop: */

const TRACKS = gql`
  # Query goes here
  query GetTracksSandbox {
    tracksForHome {
      id
      length
      title
      modulesCount
      author {
        id
        name
        photo
      }
      thumbnail
    }
  }
`

console.log(TRACKS)

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  // use the destructured constants from usequery hook
  const { loading, error, data } = useQuery(TRACKS)
  // if (loading) return "Loading ..."
  // if (error) return `ERROR! ${error.message}`

  return (
    <>
      {console.log(JSON.stringify(data))}
      <Layout grid>
        {/* // optional chain question mark operator */}
        <QueryResult error={error} loading={loading} data={data}>
          {data?.tracksForHome?.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </QueryResult>
      </Layout>
    </>
  )
}

export default Tracks
