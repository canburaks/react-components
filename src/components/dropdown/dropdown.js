import React from "react";
import "./dropdown.css"

export const Dropdown = ({self, children, horizontal="-60px"}) =>(
    <div class="dropdown">
        <button class="dropbtn">{self}</button>
        <div class="dropdown-content" style={{left:horizontal}}>
            {children}
        </div>
    </div>
)