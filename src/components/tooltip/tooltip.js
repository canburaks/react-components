import React from 'react'
import "./tooltip.css"

export const Tooltip = (props) =>{
    const {children, side="top", text=""} = props;
    return(
        <div className={`tooltip ${side}`} >{children}
            <span className="tooltiptext">{text}</span>
        </div>
    )
}