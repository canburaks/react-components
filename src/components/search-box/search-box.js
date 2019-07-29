import React from 'react'
import { useState, useEffect } from "react";

import "./search-box.css"

export const SearchBox = (props) => {
    const vals = props.data ? props.data : []
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState("")
    const [values, setValues] = useState(vals)
    const [activeItem, setActiveItem] = useState(null)

    const inputClassName = setInputClassName()

    useEffect(() => {
        document.addEventListener("click", () => setOpen(false))
        return (
            document.removeEventListener("click", () => setOpen(false))
        )
    }, [])

    function setInputClassName() {
        let cls = props.className ? props.className : "searchbox-input";
        if (props.transparent) {
            cls += " transparent"
        }
        if (props.animate) {
            cls += " animate"
        }
        return cls
    }

    async function inputHandler(e) {
        //if autocomplete list is open, close it
        if (open){
            setOpen(false)
        }
        setInput(e.target.value)

        //Export input to parent
        if(props.export){
            props.export(e.target.value)
        }

        //if data is local and supplied
        if (props.data) {
            const result = props.data.filter(d => resultValidation(d).includes((e.target.value).toLowerCase()))
            if (result && result.length > 0) {
                setValues([...result])
                setOpen(true)
            }
        }
        //if data is remote
        else if (props.query && e.target.value.length > 2) {
            const result = await props.query((e.target.value).toLowerCase())
            if (result && result.length > 0) {
                setValues([...result])
                setOpen(true)
            }
        }
        else {
            console.log("there is no already supplied data or supplied remote query function")
        }
    }

    function clickHandler(e, value) {
        // Update the user input and reset the rest of the state
        e.preventDefault();
        if (value) {
            props.onClick(value);
        }
        setInput("");
        setValues([]);
        setOpen(false)
        setActiveItem(0);
    }

    function onKeyDown(e){
        // User pressed the enter key, update the input and close the
        // suggestions
        if (e.keyCode === 13) {
            e.preventDefault();
            if (activeItem===null){
                props.onSubmit(values);
            }
            else {
                props.onClick(values[activeItem])
            }
            setActiveItem(null);
            setOpen(false)
            setValues([]);
            setInput("");
        }
        // User pressed the up arrow, decrement the index
        else if (e.keyCode === 38) {
            if (activeItem === 0) {
                return;
            }
            setActiveItem(activeItem - 1)
        }
        // User pressed the down arrow, increment the index
        else if (e.keyCode === 40) {
            if (activeItem === null){
                setActiveItem(0)
                return;
            }
            else if (activeItem === values.length -1) {
                return;
            }

            setActiveItem(activeItem + 1)
        }
    }

    function submitHandler(e) {
        //console.log(this.state)
        e.preventDefault();
        const submitData = {input, values}
        props.onSubmit(submitData);
        setOpen(false)
    }

    function resultValidation(data) {
        if (typeof data === "string") {
            return data.toLowerCase()
        }
        else if (typeof data === "object") {
            return data.name.toLowerCase
        }
        else {
            console.log("!!!! Data is neither string neither object!!")
            return null
        }
    }

    function createListItem(value, active=false, index) {
        const isString = typeof value === "string";

        if (isString) return (
            <div
                className={active===true ? "ac-list-item active" : "ac-list-item"}
                onClick={(e) => clickHandler(e, value)} key={index}
            >
                <p className="ac-item-text">{value}</p>
            </div>
        )
        var imageSrc;
        var text;
        if (props.item) {
            imageSrc = value[props.item.image];
            text = value[props.item.text];
        }
        return (
            <div className={active===true ? "ac-list-item active" : "ac-list-item"}
                onClick={(e) => clickHandler(e, value)} key={index}
            >
                {imageSrc && <img src={imageSrc} className="ac-item-img" />}
                {text && <p className="ac-item-text">{text}</p>}
            </div>
        )
    }
    const SubmitIcon = () =>{
        if (props.icon){
            return (
                <div className="input-icon" onClick={e => submitHandler(e)} title="Get results!">
                    {props.icon}
                </div>
            )}
        else return(
            <svg
                title={"Get results!"}
                stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="input-icon"
                onClick={e => submitHandler(e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            >
                <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        )
    }
    return(
        <div className={props.className ? `autocomplete ${props.className}` : "autocomplete"}>
            <input autoComplete="new-password"
                id="searchbox-input" type="text" className={inputClassName} value={input}
                name="myCountry" placeholder={props.placeholder ? props.placeholder : ""}
                onChange={e => inputHandler(e)}
                onKeyDown={e => onKeyDown(e)}
            />
            <SubmitIcon />

            {open && 
            <div className="autocomplete-items" >
                {values.map((v,i )=> {
                    if (i === activeItem) return createListItem(v, true, i)
                    else return createListItem(v, false, i)
                    })}
            </div>
        }
        </div>
    )
}
const IconSearch = ({ className = "", size = 24, stroke = "currentColor", strokeWidth = 2, fill = "none", onClick = null, title=null }) => (<svg title={title} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className + " feather feather-search"}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>)
