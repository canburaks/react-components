 import React from 'react';
import { useState } from "react";

import "./forms.css"



export const Input = (props)=>{
    const {
    placeholder = "Input",
    className = "",
    type = "text",
    label = "",
	validation=null,
	validationMessage=null,
    } = props

	const [inputValue, setInputValue] = useState("")
	const [error, setError] = useState("")

	const inputHandler = e =>{
		setInputValue(e.target.value);
		if (validation && validationMessage){
			validation(e.target.value) ? setError("") : setError(validationMessage)  
		}
	}

	const getInputClassname = () =>{
		var cls = `form-input cbs-input ${className}`;
		cls = inputValue.length > 0 ? cls + " fill" : cls
		cls = error.length > 0 ? cls + " error" : cls
		cls = (inputValue.length > 0 && validation && validation(inputValue)) 
			? cls + " valid" 
			: cls
		return cls
	}
	const inputClassname = getInputClassname()


	props.getValue(inputValue)
	props.getError &&  props.getError(error)
    return (
        <div className="input-box">
            {label && <label className="cbs-label">{label}</label>}
            <input required min={4} maxLength={20}
				className={inputClassname}
                placeholder={placeholder} type={type}
				value={inputValue}
				onChange={inputHandler}
                />
			{validatin && validationMessage && <label className="cbs-label-error">{error}</label>}
        </div>
    )
}
/*

export const UsernameInput = ({ getError, getValue, label="username", placeholder="Username" }) => (
	<Input
		label={label}
		type="text"
		placeholder={placeholder}
		getValue={getValue}
		getError={getError}
		validation={usernameValidator}
		validationMessage={"Username must be minimum four alphanumeric characters"}
	/>
)

export const PasswordInput = ({ getError, getValue, label="password", placeholder ="Password", validator=null, validationMessage=null }) =>(
	<Input
		label={label}
		type="password"
		placeholder={placeholder}
		getValue={getValue}
		getError={getError}
		validation={validator ? validator : passwordValidator}
		validationMessage={validationMessage ? validationMessage : "Password must be 8 alphanumeric-uupercase-lowercase."}
	/>
)
export const EmailInput = ({ getError, getValue, label="email", placeholder="@" }) => (
	<Input
		label={label}
		type="email"
		placeholder={placeholder}
		getValue={getValue}
		getError={getError}
		validation={emailValidator}
		validationMessage={"Please enter a valid mail adress."}
	/>
)



function usernameValidator(text){
	var patt1 = /[.,~|<>£#{}"'^+%&/()=?_-]/g;
	var result = text.match(patt1);
	return (result && result.length >0 || text.length<3) ? false : true
}

function emailValidator(text) {
	if (text.includes("@") && text.length > 5) {
		let former = text.split("@")[0]
		let latter = text.split("@")[1]
		if (former.length > 2 && latter.includes(".") && latter.length > 2) return true
	} else {
		return false
	}
}

function passwordValidator(value) {
	if (value.length < 8) return false
	else if (value === value.toLowerCase()) return false
	else if (value === value.toUpperCase()) return false
	else return true

}
*/