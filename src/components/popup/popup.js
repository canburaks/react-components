import React from "react";
import { useState } from "react";
import "./popup.css"

export const Popup = ({
    text,
    children,
    className="",
    title="",
    side="right",
    id="cbs-popup"
}) =>{
    const [open, setOpen] = useState(false);
    const cls = open ? "popuptext show" : "popuptext"
    return(
        <div className={`popup ${side} ${className}`} onClick={() => setOpen(!open)} title={title}>
            {children}
            <span className={cls} id={id}>{text}</span>
        </div>
    )
}