import React, { useState } from "react";

import { YoutubePlayer } from 'react-reusable-component'
import {Icon} from 'react-reusable-component'

import {videos} from "./dev-resources/videos";

const App = (props) => {
	console.log(Object.keys(Icon))
	return (
		<div style={{ padding: "10vh", minHeight: "300vh" }}>
			
			<YoutubePlayer videos={videos}>

			</YoutubePlayer>
		</div>
)
}

export default App

/*
export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			videos:[],
			childrens:<div>aasdsasd</div>
		}
	}
	exportVideos(v){
		this.setState({videos:v})
	}
	Palette = () => (
		<Palette src={this.state.videos[0].thumb}>
			{({ data, loading, error }) => (
				<div style={{ color: data.vibrant }}>
					Text with the vibrant color
    					</div>
			)}
		</Palette>
	)
	componentDidMount(){
	}
  render () {
	console.log("app", this.state.videos)

    return (
      <div style={{padding:"10vh", minHeight:"300vh"}}>
        <YoutubePlayer videos={videos} export={this.exportVideos.bind(this)}>

        </YoutubePlayer>
		<In />
      </div>
    )
  }
}
*/