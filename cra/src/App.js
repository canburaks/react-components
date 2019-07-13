import React from "react";
import { useState } from "react";

import { YoutubePlayer, SideNavButtons, SideButton, SearchBox } from 'cbs-react-components'
import { NavBar, NavLink } from 'cbs-react-components'

import { IconImdb } from 'cbs-react-components/dist/icon'
import { videos } from "./dev-resources/videos";

const App = (props) => {
  function inputHandler(input) {
    console.log("parent input handler: ", input)
  }

  return (
    <div style={{ minHeight: "200vh", backgroundColor: "grey", display: "block" }}>
      <NavBar fixed>
        <NavLink brand>
          <a href="/home/">Brand Name</a>
        </NavLink>

        <NavLink >
          <a href="/link1">link1</a>
        </NavLink>

        <NavLink search>
          <SearchBox
            class="static"
            item={{ image: "poster", text: "name" }}
            query={query}
            onClick={(value) => console.log("parent onClick ->", value)}
            onSubmit={values => console.log("parent onSubmit ->", values)}
            animate
          />
        </NavLink>
        <NavLink right onClick={() => alert("asd")}>
          <button href="/right-button">right-link2</button>
        </NavLink>
      </NavBar>

      <br/>
      <div style={{height:"40vh", width:"100%", display:"flex",alignItems:"center", flexDirection:"column", justifyContent:"center"}}>
        <SearchBox
          class="static"
          item={{ image: "poster", text: "name" }}
          query={query}
          onClick={(value) => console.log("parent onClick ->", value)}
          onSubmit={values => console.log("parent onSubmit ->", values)}
          icon={<svg
            title={"Get results!"} fill="none"
            stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={"input-icon"}
          >
            <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>}
          transparent
          animate
        />
        </div>
      </div>
  )
}

export default App


function query(input) {
  return new Promise(resolve => {
    setTimeout(() => {
      const queryResults = movies.filter(movie => movie.name.toLowerCase().includes(input));
      //console.log("result returned", result)
      resolve(queryResults)
    }, 300)
  });
}

var movies = [
  { name: "Space Odyssey", id: 924, poster: "2001.jpg" },
  { name: "Amarcord", id: 7089, poster: "https://cbs-static.s3.amazonaws.com/static/media/posters/7089/7089-tmdb.jpg" },
  { name: "Amarcord", id: 7089, poster: "https://cbs-static.s3.amazonaws.com/static/media/posters/7089/7089-tmdb.jpg" }

]

/*An array containing all the country names in the world:*/
var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia"];

/*
      <NavBar fixed>
        <NavLink brand>
          <a href="/home/">Brand Name</a>
        </NavLink>

        <NavLink >
          <a href="/link1">link1</a>
        </NavLink>

        <NavLink right>
          <a href="/right-link1">right-link1</a>
        </NavLink>
        <NavLink right onClick={() => alert("asd")}>
          <button href="/right-button">right-link2</button>
        </NavLink>
      </NavBar>
<div style={{marginTop:50}}>
	<SearchBox
		class="static"
		data={countries}
		onClick={(value) => console.log("parent onClick ->", value)}
		onSubmit={values => console.log("parent onSubmit ->", values)}
		placeholder={"Movies..."}
		transparent
	/>
</div>
<div style={{marginTop:200, width:"100%"}}>
	<SearchBox
		class="dynamic"
		item={{image:"poster", text:"name" }}
		query={query}
		placeholder={"Search..."}
		animate
		onClick={(value) => console.log("parent onClick function ->", value)}
		onSubmit={values => console.log("parent onSubmit ->", values)}
		/>
</div>
<div style={{ marginTop: 200, width: "100%" }}>
	<SearchBox
		class="dynamic"
		item={{ image: "poster", text: "name" }}
		query={query}
		placeholder={"Search..."}
		onClick={(value) => console.log("parent onClick function ->", value)}
		onSubmit={values => console.log("parent onSubmit ->", values)}
	/>
</div>


<SideNavButtons  >
	<SideButton before={<p>?:</p>}>Lists</SideButton>
	<SideButton styles={{backgroundColor:"red"}}> Directors</SideButton>
	<SideButton className="my-classname">Movies</SideButton>
</SideNavButtons>

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