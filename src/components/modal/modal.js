import React from "react";
import { useState, useEffect, useRef } from "react";

import  "./modal.css"

export const Modal = ({
    toggle,
    children,
    isOpen=false,
    clsBox="",
    clsContent=""
}) =>{
    const modalRef = useRef(null)
    const cls = isOpen ? `cbs-modal-box ${clsBox}` : "hidden"
    function outsideClick(e){
        if (modalRef!==null && e.target===modalRef.current){
            toggle()
        }
    }
    return(
        <div className={cls} ref={modalRef} onClick={(e) => outsideClick(e)}>
            <div className={`cbs-modal-content ${clsContent}`} onClick={null}>
                {children}
                <svg aria-hidden="true" focusable="false" onClick={toggle}
                    className={"f-icon svg-inline--fa fa-times-circle fa-w-16"}
                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                >
                    <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"></path>
                </svg>
            </div>

        </div>
    )
}

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen);
    }

    return {
        isOpen,
        toggle,
    }
};
