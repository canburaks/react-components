import React from "react";
//import { useState } from "react";

//import { YoutubePlayer, SideNavButtons, SideButton, SearchBox } from 'cbs-react-components'
//import { NavBar, NavLink } from 'cbs-react-components'
//import { ProgressBar, CircularProgress } from 'cbs-react-components'
//import { Tooltip } from 'cbs-react-components'

//import { IconImdb } from 'cbs-react-components/dist/icon'
//import { videos } from "./dev-resources/videos";

const App = (props) => {
	function inputHandler(input) {
		console.log("parent input handler: ", input)
	}

	return (
		<div style={{ minHeight: "200vh", display: "block", backgroundColor: "grey", padding: "10vw" }}>

		</div>
	)
}
/*
	NOTES: 
	- Choose only one of percent, onlyvalue or nolabel
	- Spectrum is hsla color values: given range of hue values stroke color will fall between the range.
		E.g; spectrum={{start:0, stop:180, transparency=0.8}} and value={40} max={80} 
		will take ((40/80)*(180-0))=90 hue value and color will be hsla(90, 100%, 50%, 1).
		default transparency value is 1.
*/
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
------ProgressBar--------
<CircularProgress
	value={65} 							//required
	max={100} 							//default 100
	size={80}							//default 80
	strokeWidth={10}					//default 6
	stroke={"rgb(142, 241, 125)"} 		//defaul rgb(69, 72, 233)
	baseStroke={"rgb(40, 40, 40)"}	    //default none
	fill={"rgb(40, 40, 40)"} 			//default rgb(42, 40, 40);

	textColor={"rgb(211, 204, 227)"}		        //default rgb(20,20,20)
	fontSize={18} 						//default size/5 (if fontSize > size/4 than fontSize=size/5)
	fontWeight={600}					//default 600
	percent								//options-> percent,onlyvalue nolabel
/>
<ProgressBar
	value={65} 							//required
	max={100} 							//default 100
	height={30}							//default 30(px)
	fontSize={16}						//default 16(px)
	borderRadius={4}					//default 4(px)
	backgroundColor={"white"}			//default white
	progressColor={"#4CAF50"}			//default #4CAF50
	textColor={"white"}					//default white
	percent								//options-> percent,onlyvalue nolabel
/>
-----------------------------------------------


---- NavBar------------------------------------
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
---------------------------------------------------


---- SearchBox ------------------------------------
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
------------------------------------------------------

---- SideNavButton------------------------------------
<SideNavButtons>
	<SideButton before={<p>?:</p>}>Lists</SideButton>
	<SideButton styles={{backgroundColor:"red"}}> Directors</SideButton>
	<SideButton className="my-classname">Movies</SideButton>
</SideNavButtons>
----------------------------------------------

*/