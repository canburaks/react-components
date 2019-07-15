import React from 'react'
import { useState } from 'react'

import "./collapsible-text.css"

export const TextCollapse = ({
    children,
    className="",
    toggleOpenLabel="MORE",
    toggleCloseLabel="LESS",
    size=400
}) =>{
    const isOverflowed = children.length> size;

    const [expanded, setExpanded] = useState(!isOverflowed)

    function cropText(size, text){
        if (!isOverflowed){
            return text
        }
        const cropped = text.slice(0,size)
        const words = cropped.split(" ").slice(0, -1)
        const newText = words.join(" ")
        return newText + " ..."
    }
    const croppedText = cropText(size, children)
    const renderText = expanded ? children : croppedText
    return(
        <div className="collapsible-box">
            <div className={`collapsible-text ${className}`}>
                {renderText}
            </div>
            {isOverflowed && 
                <div 
                className={expanded ? "collapsible-toggle open" : "collapsible-toggle close" }
                    title={expanded ? "Less" : "More"}
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? toggleCloseLabel : toggleOpenLabel}
                </div>
            }
        </div>
    )
}