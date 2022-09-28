import React from "react"
import { Layout } from "../components"
// always import this first
import { gql } from "@apollo/client"

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
  return <Layout grid> </Layout>
}

export default Tracks
