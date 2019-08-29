import React from "react";
import { useState } from "react"
import  "./player.css"


export const YoutubePlayer = (props) =>{


    const initialVideos = (props.videos && props.videos.length > 0) 
        ? [...processVideos(props.videos)]
        : []
    const initialActive = initialVideos.length > 0 ? initialVideos[0] : {}

    const [ videos, setVideos ] = useState(initialVideos)
    const [ activeVideo, setActiveVideo ] = useState(initialActive)
    const [ theme, setTheme ] = useState(props.theme || "dark")

    if (initialVideos.length === 0) return <div></div>

    return(
        <div theme={theme} id="video-player-box">
            <div id="player-box">
                <iframe id="player"
                    src={activeVideo.src}
                    title="youtube player"
                    theme="light" color="red"
                    width="100%" height="100%"
                    controls="0"
                    rel="0"
                    frameBorder="0" allowFullScreen
                />
                <div id="infobox">
                    {theme==="dark" &&
                        <svg onClick={() => setTheme("light")}
                            className="feather-sun"
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
                            <svg onClick={() => setTheme( "dark")}
                            className="feather-moon"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                            
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                            strokeLinejoin="round" className="feather feather-moon">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                        }


                    <p  id="video-title">{activeVideo.title}</p>
            </div>
            </div>
            
            <div id="playlist">
                {props.title && <h4 id="title">{props.title}</h4>}
                <div className="inner-playlist">
                    {videos.map((v, i)=>(
                        <div title={v.title}
                            className={v === activeVideo ?"active-list-item list-item" : "list-item"}
                            onClick={() => setActiveVideo(v)}
                            key={v.id + i}
                            >
                            <img  alt={v.title} title={v.title} src={v.thumb}  className="list-item-thumb" />
                            <p className="list-item-text">{v.title}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
};



function processVideos(videos) {
    var newList = [];
    videos.map(v => {
        const newVideo = { ...v };
        if (!v.youtubeId || v.youtubeId.length < 3) {
            newVideo.youtubeId = v.link.split("?v=")[1];
        }
        if (!v.thumb || v.thumb.length < 3) {
            newVideo.thumb = `https://img.youtube.com/vi/${newVideo.youtubeId}/mqdefault.jpg`
        }
        newVideo.src = setYoutubeUrl(newVideo.youtubeId)
        newList.push(newVideo)
    })
    return newList
}

function setYoutubeUrl(youtubeId, start) {
    const origin = window.location.href
    if (start !== undefined && start !== null) {
        return `https://www.youtube.com/embed/${youtubeId}?start=${start}&rel=0&modestbranding=1&autohide=1&enablejsapi=1&origin=${origin}`
    }
        return `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&autohide=1&enablejsapi=1&origin=${origin}`
}