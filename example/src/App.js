import React, { useState } from "react";

import { YoutubePlayer } from 'react-reusable-component'
import { NavBar, NavLink } from 'react-reusable-component'

import {IconImdb} from 'react-reusable-component/dist/icon'
import {videos} from "./dev-resources/videos";

const App = (props) => {
	return (
		<div style={{ minHeight: "300vh", background:"grey" }}>
			<IconImdb />
			{/*<NavBar fixed>
				<NavLink label="Brand name"  brand/>
				<NavLink label="Lists" />
				<NavLink className="pad-2x" style={{backgroundColor:"red"}}>
					Inline Text
				</NavLink>
				<NavLink search>
					<div class="search-container">
						<form>
							<input type="text" placeholder="Search.." name="search" />
								<button type="submit"><i class="fa fa-search"></i></button>
							</form>
						</div>
				</NavLink>

				<NavLink label="Directors" right as="link" to={"/persons"}/>
				<NavLink label="Profile" right onClick={() => alert("asd")}/>
			</NavBar>*/}
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