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
Icons are adapted from [feather-icons](https://github.com/feathericons/feather).




```jsx
import React from 'react'
import {Icon} from 'react-reusable-component'

class Example extends React.Component {
  render () {
    return (
      <Icon.twitter size="28" fill="black" stroke="blue" strokeWidth="1"/>
    )
  }
}

console.log(Object.keys(Icon))
/* prints
[ "arrowLeft", "arrowRight", "bookmark", "check", "circle", "facebook", "film",
  "github", "heart", "home", "lock", "login", "logout", "menu", "messageSquare", 
  "moreHorizontal", "moreVertical", "plus", "search", "settings", "slash", "sliders", 
  "star", "tag", "toggleLeft", "toggleRight", "tv", "twitter", "type", "userCheck", 
  "userMinus", "userPlus", "userX", "user", "users", "videoOff", "video", "xCircle", "x", "youutube"
]
```



## License

MIT © [canburaks](https://github.com/canburaks)
