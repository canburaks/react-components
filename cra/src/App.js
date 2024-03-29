import React from "react";
import { useState } from "react";

import { YoutubePlayer, SearchBox, Modal, useModal, NavBar } from 'cbs-react-components'
//import { ProgressBar, CircularProgress } from 'cbs-react-components'
//import { TextCollapse } from 'cbs-react-components'


import { videos } from "./dev-resources/videos";
//import { Input, PasswordInput, EmailInput,UsernameInput } from 'cbs-react-components'
//import { Input } from 'cbs-react-components'


const App = (props) => {
	const styles = {minHeight: "150vh",padding:"0 2vh", display: "block", color: "black",backgroundColor: "rgba(140, 140, 140, 0.25)"}
	/*
	const [email, setEmail] = useState("")

	const [username, setUsername] = useState("")
	const [pass, setPass] = useState("")
	const [pass2, setPass2] = useState("")

	const getError = (e) => console.log("error",e)
	console.log(pass, "-", pass2)
	*/
	return (
		<div style={styles}>
		<YoutubePlayer />
			
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
	{ name: "Amarcord", id: 7088, poster: "https://cbs-static.s3.amazonaws.com/static/media/posters/7089/7089-tmdb.jpg" },
	{ name: "Amarcord", id: 7089, poster: "https://cbs-static.s3.amazonaws.com/static/media/posters/7089/7089-tmdb.jpg" }
	
]

var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia"];

/*


<Input
	label={label}
	type="password"
	placeholder={placeholder}
	getValue={getValue}
	getError={getError}
	validation={validator ? validator : passwordValidator}
	validationMessage={validationMessage ? validationMessage : "Password must be 8 alphanumeric-uupercase-lowercase."}
/>

-----FORM----------------
<UsernameInput getValue={setUsername}  getError={getError} />
<EmailInput getValue={setEmail}  getError={getError} />
<PasswordInput getValue={setPass}  getError={getError} />
<PasswordInput getValue={setPass2}
	label="Re-Password"
	validator={e => e===pass} getError={getError}
	validationMessage="Password doesn't match"
	/>

-----Modal----------------
import { Modal, useModal } from 'cbs-react-components'

const App = (props) => {
	const { isOpen, toggle } = useModal();
		return (
		<div style={{ minHeight: "100vh", display: "block",color:"white",
			backgroundColor: "rgba(31, 31, 31, 0.95)",
			padding: "5vw" }}>

			<YoutubePlayer videos={videos} />
				<button className="button-default" onClick={toggle}>Show Modal</button>

			<Modal
				isOpen={isOpen}
				toggle={toggle}
				>
					<div style={{width:200, height:300}}>asdasd</div>
			</Modal>
		</div>
	)
}


---Collapsible Text---------------------
<TextCollapse
	size={400}
	className="my-classname"
	toggleOpenLabel={"MORE"}
	toggleCloseLabel={"LESS"}
	>
		The Matrix is a 1999 science fiction action film[3][4] written and directed by the Wachowskis[a] that
		stars Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano.
		It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality,
		the Matrix, created by thought-capable machines (artificial beings)[b] to distract humans while
		using their bodies as an energy source.When computer programmer Thomas Anderson, under the hacker alias "Neo",
		uncovers this truth, he "is drawn into a rebellion against the machines"
		along with other people who have been freed from the Matrix.
		The Matrix is an example of the cyberpunk subgenre of science fiction.
		The Wachowskis' approach to action scenes was influenced by Japanese animation and martial arts films,
		and the film's use of fight choreographers and wire fu techniques from Hong Kong action cinema influenced
		subsequent Hollywood action film productions.The film is known for popularizing a visual effect known as
		"bullet time", where the heightened perception of certain characters is represented by allowing the action
		within a shot to progress in slow-motion while the camera appears to move through the scene at normal speed,
		allowing the sped-up movements of certain characters to be perceived normally. While some critics have praised
		the film for its handling of difficult subjects, others have said the deeper themes are largely overshadowed
		by its action scenes. The Matrix was first released in the United States on March 31, 1999,
		and grossed over $460 million worldwide. It was well-received by many critics
		and won four Academy Awards, as well as other accolades, including BAFTA Awards and
		Saturn Awards. The Matrix was praised for its innovative visual effects, cinematography and entertainment value.
		The film has since appeared in lists of the greatest science fiction films, and was added to the National
		Film Registry for preservation in 2012. The success of the film led to the release of two feature film sequels in 2003,
		The Matrix Reloaded and The Matrix Revolutions, which were also written and directed by the Wachowskis.
		The Matrix franchise was further expanded, with the Wachowskis being heavily involved, through the production of
		comic books, video games and animated short films. The Matrix franchise has even inspired books and theories on some
		of the religious and philosophical ideas alluded to in the movies.
</TextCollapse>
------------------------------------------



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
*/