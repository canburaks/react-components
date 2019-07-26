import React from "react";
import  "./player.css"


export  class YoutubePlayer extends React.Component{
    constructor(props) {
        super(props);
        this.sort = this.props.sort ? this.props.sort : "trailer"
        this.debug = this.props.debug ? this.props.debug : false;
        //console.log("asd",props)
        let processedVideos = this.processVideos(this.sortByTag(this.props.videos, this.sort));
        //console.log("process", processedVideos)
        //this.setState({ videos: [...processedVideos], activeVideo: processedVideos[0] });

        this.state = { 
            videos: processedVideos,
            activeVideo: processedVideos[0],
            src: processedVideos[0] ? processedVideos[0].thumb : null,
            theme:props.theme ? props.theme : "dark",
            listbox:true
         };
         this.trace("state", this.state)
    }
    loadVideos(){
        if (this.props.videos.length>0){
            let processedVideos = processVideos(sortByTag(this.props.videos, this.sort));
            this.trace("process", processedVideos)
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
        return `https://www.youtube.com/embed/${youtubeId}?start=${start}&rel=0&modestbranding=1&autohide=1&enablejsapi=1&origin=https://pixly.app`
    }
    //console.log(`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&autohide=1&origin=https://pixly.app`)
        return `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&autohide=1&enablejsapi=1&origin=https://pixly.app`
}
    resize(){
        //console.log("resizing..")

        var playerBox = document.getElementById("active-video-box");
        var listBox = document.getElementById("list-box");
        if (playerBox && playerBox.clientWidth) {
            var playerBoxHeight = `${playerBox.clientWidth * 0.61 + 60}px`
            playerBox.style.height = playerBoxHeight
            listBox.style.height = playerBoxHeight
        }
    }
    componentDidMount(){
        this.resize()
        window.addEventListener("resize", this.resize, {passive:true})
    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.resize)
    }
    
render(){

    if(this.state.videos.length < 1 ){
        return(<div></div>)
    }
    this.trace("render ", this.state )
    const { activeVideo, videos, theme, listbox } = this.state;
    return(
        <div theme={theme} id="video-player-box" className={theme}>
            <div id="active-video-box" >
                <iframe id="player"
                    src={activeVideo.src}
                    title="youtube player"
                    theme="light" color="red"
                    width="100%" height="100%"
                    controls="0"
                    rel="0"
                    frameBorder="0" allowFullScreen
                />

                <div id="video-info-box">
                {theme==="dark" &&
                    <svg onClick={() => this.setState({theme:"light"})}
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
                        <svg onClick={() => this.setState({ theme: "dark" })}
                        className="feather-moon"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                        
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round" className="feather feather-moon">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                    }


                    <p  id="video-title">{activeVideo.title}</p>
                    {listbox 
                        ?   <svg aria-hidden="true" focusable="false" onClick={() => this.setState({listbox:false})}
                                data-prefix="fas"
                                data-icon="angle-double-up"
                                className="f-icon toggle-list-box svg-inline--fa fa-angle-double-up fa-w-10" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                            >
                                <path fill="currentColor" d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"></path>
                            </svg>
                        :   <svg aria-hidden="true" focusable="false" onClick={() => this.setState({listbox:true})}
                                data-prefix="fas" data-icon="angle-double-down"
                                className="f-icon toggle-list-box svg-inline--fa fa-angle-double-down fa-w-10"
                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                            >
                                <path fill="currentColor" d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"></path>
                            </svg>
                    }
            </div>
        </div>

        <div id="list-box" className={listbox ? "open" : "close"}>
        {videos.map((v, i)=>(
            <div title={v.title}
                className={v === activeVideo ?"active-list-item" : "list-item"}
                onClick={() => this.setState({activeVideo:v})}
                key={v.id + i}
                >
                <img  alt={v.title} title={v.title} src={v.thumb}  className="list-item-thumb" />
                <p className="list-item-text">{v.title}</p>
            </div>
        ))}
        </div>
    </div>

    )
    }
};
