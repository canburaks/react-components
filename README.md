# personal react components archive
Note: this is not suitable for produciton.

> 

[![NPM](https://img.shields.io/npm/v/react-reusable-component.svg)](https://www.npmjs.com/package/react-reusable-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save cbs-react-components
or
```bash
yarn add cbs-react-components
``````

## Youtube Player

```jsx
import React, { Component } from 'react'

import YoutubePlayer from 'cbs-react-components'

class Example extends Component {
  render () {
    return (
      <YoutubePlayer  videos={videos}/>
    )
  }
}

const videos = [
    {
        "id": 27623,
        "title": "Writer/Drirector Pawel Pawlikowski talks about the framing of IDA",
        "summary": null,
        "link": "https://www.youtube.com/watch?v=25sV5zhdn1A",
        "youtubeId": "25sV5zhdn1A",
        "tags": [
            "featurette"
        ],
        "duration": null,
    },
    {
        "id": 27622,
        "title": "Ida - Official Trailer",
        "summary": null,
        "link": "https://www.youtube.com/watch?v=i_vrlpWB4Vo",
        "youtubeId": "i_vrlpWB4Vo",
        "tags": [
            "trailer"
        ],
        "duration": null,
    }]

```

### Icon
Icons are mostly adapted  from [feather-icons](https://github.com/feathericons/feather).
Also there are some other icons.



```jsx
import React from 'react'
import {IconTwitter} from 'cbs-react-components/dist/icon'

class Example extends React.Component {
  render () {
    return (
        <IconTwitter 
            size="28" 
            fill="black" 
            stroke="blue" 
            strokeWidth="1" 
            className="tw-share" 
            onClick={() => alert("clicked")}
        />
    )
  }
}

/*Other Icons
[ "IconArrowLeft", "IconArrowRight", "IconBookmark", "IconCheck", "IconCircle", 
  "IconFacebook", "IconFilm", "IconGithub", "IconGlobe", "IconHeart", "IconHome","IconImdb","IconInstagram",
  "IconLock", "IconLogin", "IconLogout", "IconMenu", "IconMessageSquare", "IconMoreHorizontal",
  "IconMoreVertical", "IconPlus", "IconSearch", "IconSettings", "IconSlash", "IconSliders", 
  "IconStar", "IconTag", "IconToggleLeft", "IconToggleRight", "IconTv", "IconTwitter", "IconType", "IconUserCheck", "IconUserMinus", "IconUserPlus", "IconUserX", "IconUser", "IconUsers",
  "IconVideoOff", "IconVideo", "IconXCircle", "IconX", "IconYouutube"
]
```

### Navbar
A Simple Responsive Navbar.
```jsx
import React from 'react'
import { NavBar, NavLink } from 'cbs-react-components'


const MyNav = (props) => {
	return (
        <NavBar fixed>
            <NavLink  brand>
                <a href="/home/">Brand Name</a> 
            </NavLink>
        
            <NavLink className="your-class-name">
                <a href="/link1">link1</a> 
            </NavLink>
        
            <NavLink search>
                <div class="search-container">
                    <form>
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </NavLink>
        
            <NavLink right>
                <a href="/right-link1">right-link1</a> 
            </NavLink>
            <NavLink right onClick={() => alert("asd")}>
                <button href="/right-button">right-link1</button> 
            </NavLink>
        </NavBar>
  )
}
```
### Progress Bar

###### ProgressBar
```jsx
import React from "react";
import { ProgressBar } from 'cbs-react-components'


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
    spectrum={{ start: 0, stop: 120, tranparency: 1 }} //default none
/>

const Example = (props) =>{
    return(
        <div style={{ height: "100%", display: "block", backgroundColor: "grey" }}>
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
        </div>
    )
}

```
###### CircleProgress
```jsx
import React from "react";
import { CircularProgress } from 'cbs-react-components'


<CircularProgress
    value={65} 							//required
    max={80} 							//default 100
    size={60}							//default 80
    strokeWidth={6}						//default 6
    stroke={"rgb(69, 72, 233)"} 		//defaul rgb(69, 72, 233) 	
    baseStroke={"rgb(40, 40, 40)"}	    //default none
    fill={"rgb(240, 240, 240)"} 		//default rgb(42, 40, 40);
    
    textColor={"#232526"}		        //default rgb(20,20,20)
    fontSize={18} 						//default size/5 (if fontSize > size/4 than fontSize=size/5)
    fontWeight={600}					//default 600
    percent							    //options-> percent,onlyvalue nolabel 
    title={`You made great progress !!!`}
    spectrum={{ start: 0, stop: 120, tranparency: 1 }} //default none
/>

const Example = (props) =>{
    return(
        <div style={{ height: "100%", display: "block", backgroundColor: "grey" }}>
            <CircularProgress
                value={65} 							
                max={100} 							
                size={80}							
                strokeWidth={10}					
                stroke={"rgb(142, 241, 125)"} 			
                baseStroke={"rgb(40, 40, 40)"}	   
                fill={"rgb(40, 40, 40)"} 		   
                textColor={"rgb(211, 204, 227)"}    
                fontSize={18} 						
                fontWeight={600}					
                onlyvalue							    
            />
        </div>
    )
}
/*
	NOTES;(for ProgressBar and CircleProgress): 
	- Choose only one of percent, onlyvalue or nolabel.
	- Spectrum is hsla color values: given range of hue values stroke color will fall between the range.
		E.g; spectrum={{start:0, stop:180, transparency=0.8}} and value={40} max={80} 
		will take ((40/80)*(180-0))=90 hue value and color will be hsla(90, 100%, 50%, 1).
		default transparency value is 1.
*/
```

### Hoverable Sidebar Buttons
This is an enhanced example of [w3schools](https://www.w3schools.com/default.asp) [Hoverable Sidenav Buttons](https://www.w3schools.com/howto/howto_css_sidenav_buttons.asp) example.

```jsx

import React from "react";
import { SideButton, SideButton } from 'cbs-react-components'

const SideNav = (props) =>{
  return(
        <SideNavButtons  >
            <SideButton before={<p>?:</p>}>Lists</SideButton>
            <SideButton styles={{backgroundColor:"red"}}> Directors</SideButton>
            <SideButton className="my-classname">Movies</SideButton>
        </SideNavButtons>
  )
}

```


### SearchBox
This is an enhanced example of [w3schools](https://www.w3schools.com/default.asp) [Autocomplete](https://www.w3schools.com/howto/howto_js_autocomplete.asp) example.

```jsx
import React from "react";
import { SearchBox } from 'cbs-react-components'

/*
----  EXAMPLE 1 - (Remote data) --------
For remote data we need pass query function that will get input from inside of SearchBox
*/
const MySearchBox1 = (props) =>{
  return(
    <SearchBox 
        item={{image:"poster", text:"name" }}
        query={myQuery}
        placeholder={"Movies..."} // default 'Search'
        animate
        onClick={(value) => console.log("'onClick function ->", value)}
        onSubmit={values => console.log("onSubmit ->", values)}
    />
    )
}
/*

*/

/*
----  EXAMPLE 2 (local data)--------
*/
const MySearchBox2 = (props) =>{
    return(
      <SearchBox 
          data={countries}
          placeholder={"Countries..."} // default 'Search'
          onClick={(value) => console.log("onClick function ->", value)}
          onSubmit={values => console.log("onSubmit ->", values)}
      />
    )
}

/*
- item prop: if your query result is an array of objects, tell which properties will show in image source      and text. Given example; In autocomplete list item look image source in poster property of movie result,
  and text in name propert of movie result.

- onClick prop: What will do when clicked to autocomplete list item. In example 
  clicked item will print ---> 'onClick function -> { name: "Space Odyssey", id: 924, poster:2001.jpg"}'

- data prop; If local data will provide use this. No need query function.

- onSubmit prop: on form submit case. For example if we search "al" and then press enter
  it will print --> 'onSubmit -> ["Albania", "Algeria", "Australia"]'
*/
function myQuery(input) {
    return new Promise(resolve => {
        setTimeout(() => {
            const queryResults = movies.filter(movie => movie.name.toLowerCase().includes(input));
            resolve(queryResults)
        }, 300)
	});
}

var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia"];

var movies = [
    { name: "Space Odyssey", id: 924, poster: "2001.jpg"},
    { name: "Amarcord", id: 7089, poster: "amarcord.jpg"}
]
```

## License

MIT © [Can Burak S.](https://github.com/canburaks)
