import React, { Component } from 'react'

import { YoutubePlayer } from 'react-reusable-component'
import {videos} from "./videos";


export default class App extends Component {
  render () {
    return (
      <div style={{padding:"10vh"}}>
        <YoutubePlayer videos={videos} />
      </div>
    )
  }
}
