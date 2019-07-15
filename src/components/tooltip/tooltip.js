import React from 'react'
import "./tooltip.css"

export const Tooltip = (props) =>{
    const {children, side="top", text="", backgroundColor="black", color="white", fontSize=16} = props;
    const cls = `tooltip ${side}`
    return(
        <div className={cls} >{children}
            <span className="tooltiptext" style={{ backgroundColor, color, fontSize }}>{text}</span>
        </div>
    )
}