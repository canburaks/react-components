import React, { useState} from "react";
import player from "./player.css"


export  class YoutubePlayer extends React.Component{
    constructor(props) {
        super(props);
        this.sort = this.props.sort ? this.props.sort : "trailer"
        this.debug = this.props.debug ? this.props.debug : true;
        //console.log("asd",props)
        let processedVideos = this.processVideos(this.sortByTag(this.props.videos, this.sort));
        //console.log("process", processedVideos)
        //this.setState({ videos: [...processedVideos], activeVideo: processedVideos[0] });

        this.state = { 
            videos: processedVideos,
            activeVideo: processedVideos[0],
            theme:props.theme ? props.theme : "dark"
         };
         this.trace("state", this.state)
    }
    loadVideos(){
        if (this.props.videos.length>0){
            let processedVideos = processVideos(sortByTag(this.props.videos, this.sort));
            console.log("process", processedVideos)
            this.setState({ videos: [...processedVideos], activeVideo: processedVideos[0]  });
        }
    }



    trace(text, obj) {
        if (this.debug === false) {
            return;
        }
        if (this.debug) {
            if (obj) {
                console.log(`${text} `, obj)
            }
            else {
                console.log(text)
            }
        }
    }

    processVideos(videos) {
    var newList = [];
    videos.map(v => {
        const newVideo = { ...v };
        if (!v.youtubeId || v.youtubeId.length < 3) {
            newVideo.youtubeId = v.link.split("?v=")[1];
        }
        if (!v.thumb || v.thumb.length < 3) {
            newVideo.thumb = `https://img.youtube.com/vi/${newVideo.youtubeId}/mqdefault.jpg`
        }
        newVideo.src = `https://www.youtube.com/embed/${newVideo.youtubeId}?rel=0&modestbranding=1&autohide=1&origin=https://pixly.app`
        newList.push(newVideo)
    })
    return newList
}

    sortByTag(videos, initial) {
    return [...videos.filter(v => v.tags.includes(initial)), ...videos.filter(v => !v.tags.includes(initial))]
}

    getYoutubeSource(youtubeId, start) {
    if (start !== undefined && start !== null) {
        return `https://www.youtube.com/embed/${youtubeId}?start=${start}&rel=0&modestbranding=1&autohide=1&origin=https://pixly.app`
    }
    //console.log(`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&autohide=1&origin=https://pixly.app`)
    return `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&autohide=1&origin=https://pixly.app`
}
componentDidMount(){
    const playerBox = document.getElementById(player["active-video-box"]);
    const listBox = document.getElementById(player["list-box"]);
    const iframe = document.getElementById(player["player"])
    if (playerBox && playerBox.clientWidth){
        const playerBoxHeight = `${playerBox.clientWidth * 0.61 + 60}px`
        playerBox.style.height = playerBoxHeight
        listBox.style.height = playerBoxHeight
        //iframe.style.height = `${playerBox.clientWidth * 0.61}px`
    }
}
    
render(){

    if(this.state.videos.length < 1 ){
        return(<div></div>)
    }
    this.trace("render ", this.state )
    const { activeVideo, videos, theme } = this.state;
    return(
        <div theme={theme} id={player["video-player-box"]} >
            <div id={player["active-video-box"]} >
                <iframe id={player["player"]}
                    src={activeVideo.src}
                    title="youtube player"
                    theme="light" color="red"
                    width="100%" height={"100%"}
                    controls="1"
                    rel="0"
                    frameBorder="0" allowFullScreen
                />

                <div id={player["video-info-box"]}>
                {theme==="dark" &&
                    <svg onClick={() => this.setState({theme:"light"})}
                        className={player["feather-sun"]}
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                        
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round" className="feather feather-sun">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>}
                {theme==="light" &&
                        <svg onClick={() => this.setState({ theme: "dark" })}
                        className={player["feather-moon"]}
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                        
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round" className="feather feather-moon">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                    }


                    <p  id={player["video-title"]}>{activeVideo.title}</p>
            </div>
        </div>

        <div id={player["list-box"]} >
        {videos.map((v, i)=>(
            <div 
                className={v === activeVideo ? player["active-list-item"]: player["list-item"]}
                onClick={() => this.setState({activeVideo:v})}
                key={v.id + i}
                >
                <img  alt={v.title} title={v.title} src={v.thumb}  className={player["list-item-thumb"]}/>
                <p className={player["list-item-text"]}>{v.title}</p>
            </div>
        ))}

        </div>
    </div>
    )
    }
};
