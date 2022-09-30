// first NPM install apollo-datasource-rest for this
const { RESTDataSource } = require("apollo-datasource-rest")

class TrackAPI extends RESTDataSource {
  // The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
  // this makes sure we get access to our RESTDataSource features. We'll also assign our REST API's base url.
  // this is the data source in charge of calling our REST API and retrieving the data
  constructor() {
    super()
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/"
  }

  getTracksForHome() {
    console.log(this.get("tracks"))
    return this.get("tracks")
  }

  getAuthor(authorId) {
    console.log(this.get(`author/${authorId}`))
    return this.get(`author/${authorId}`)
  }

  getTrack(trackId) {
    return this.get(`track/${trackId}`)
  }

  // new track for chaining resolver
  getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`)
  }
}
module.exports = TrackAPI
