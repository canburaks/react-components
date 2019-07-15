import React from "react";
import "./dropdown.css"

export const Dropdown = ({self, children, horizontal="-60px"}) =>(
    <div className="dropdown">
        <button className="dropbtn">{self}</button>
        <div className="dropdown-content" style={{left:horizontal}}>
            {children}
        </div>
    </div>
)