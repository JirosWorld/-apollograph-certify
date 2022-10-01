import React, { Fragment } from 'react'
import { Router } from '@reach/router'
/** importing our pages */
import Tracks from './tracks'
// create a route: with REACH ROUTER
import Track from './track'

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Tracks path="/" />
      <Track path="/track/:trackId" />
    </Router>
  )
}
