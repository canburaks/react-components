import React from 'react'
import "./transparent-text.css"

export const TransparentText = ({
    text,
    height=200,
    fontSize="10vw",
    foregroundColor="white",
    backgroundColor=null,
}) =>{
     
    const styles={back:{
        height:height,
        background: backgroundColor,
    }}
    return(
        <div  className="image-container" style={styles.back} >
            <div  className="text" style={{ fontSize, backgroundColor:foregroundColor }}>{text}</div>
        </div>
    )
}