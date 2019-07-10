import React from "react";
import styles from "./tag.css"

export const TagBox = ({tag, size, textColor, borderColor, icon=true, border=false}) => {
    const fontSize = size ? size : 24
    return(
        <div 
            className={styles["tag-container"]}
            style={{
                justifyContent:icon ? "flex-start" : "center",
                border:border ?  `2px solid ${borderColor ? borderColor : "black"}` :  `2px solid transparent`            
                }}
            >
            {icon!==false &&
                <svg 
                    width={fontSize} height={fontSize} viewBox="0 0 24 24" 
                    stroke={borderColor ? borderColor : "black"} 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" className="feather feather-tag">
                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                            <line x1="7" y1="7" x2="7" y2="7"></line>
                </svg>
            }

            <p className={styles["tag-text"]} style={{fontSize:size, color:textColor ? textColor : "black"}}>{tag}</p>
        </div>

    );
};


