# personal react components archive
Note: this is not suitable for produciton.

> 

[![NPM](https://img.shields.io/npm/v/react-reusable-component.svg)](https://www.npmjs.com/package/react-reusable-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-reusable-component
```

## Usage

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
import {IconTwitter} from 'react-reusable-component/dist/icon'

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
  "IconFacebook", "IconFilm", "IconGithub", "IconHeart", "IconHome","IconImdb","IconInstagram",
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
import { NavBar, NavLink } from 'react-reusable-component'


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



## License

MIT © [canburaks](https://github.com/canburaks)
