import React from 'react'
import { useState, useEffect } from "react";

import ReactDOM from 'react-dom';
import styles from "./styles.css"

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
        props.onSubmit(values);
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

    function createListItem(value, active=false) {
        const isString = typeof value === "string";

        if (isString) return (
            <div
                className={active===true ? "ac-list-item active" : "ac-list-item"}
                onClick={(e) => clickHandler(e, value)}
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
                onClick={(e) => clickHandler(e, value)}
            >
                {imageSrc && <img src={imageSrc} className="ac-item-img" />}
                {text && <p className="ac-item-text">{text}</p>}
            </div>
        )
    }

    return(
        <div className={props.className ? `autocomplete ${props.className}` : "autocomplete"}>
            <input
                id="searchbox-input" type="text" className={inputClassName} value={input}
                name="myCountry" placeholder={props.placeholder ? props.placeholder : "Search"}
                onChange={e => inputHandler(e)}
                onKeyDown={e => onKeyDown(e)}
            />
            <svg title={"Get results!"} 
                stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={"input-icon"}
                onClick={e => submitHandler(e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                >
                    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>

            <IconSearch 
                size={24} 
                strokeWidth={3} className="input-icon" 
                onClick={e => submitHandler(e)} title={"Get results!"}
                 />
            {open && 
            <div className="autocomplete-items" >
                {values.map((v,i )=> {
                    console.log(i)
                    if (i === activeItem) return createListItem(v, true)
                    else return createListItem(v, false)
                    })}
            </div>
        }
        </div>
    )
}
const IconSearch = ({ className = "", size = 24, stroke = "currentColor", strokeWidth = 2, fill = "none", onClick = null, title=null }) => (<svg title={title} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className + " feather feather-search"}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>)

/*

export const SearchBox = (props) => {
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState("")
    const [values, setValues] = useState([])
    const [activeItem, setActiveItem] = useState(null)

    const inputClassName = setInputClassName()

    useEffect(() =>{
        document.addEventListener("click", () => setOpen(false))
        return(
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
        if (open === true) {
            setOpen(false)
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
        e.preventDefault();
        if (value) {
            props.onClick(value);
        }
        setOpen(false)
    }
    function submitHandler(e) {
        //console.log(this.state)
        e.preventDefault();
        props.onSubmit(values);
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

    const createAutoCompleteList = (values) => (
        <div className="autocomplete-items" >
            {values.map(v => createListItem(v))}
        </div>
    )
    function createListItem(value) {
        const isString = typeof value === "string";

        if (isString) return (
            <div
                className={value == activeItem ? "ac-list-item active" : "ac-list-item"}
                onClick={(e) => clickHandler(e, value)}
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
            <div className={value == activeItem ? "ac-list-item active" : "ac-list-item"}
                onClick={(e) => clickHandler(e, value)}
            >
                {imageSrc && <img src={imageSrc} className="ac-item-img" />}
                {text && <p className="ac-item-text">{text}</p>}
            </div>
        )
    }



    console.log("values", values)
    console.log("open", open)
    return (
        <form autoComplete="off" onSubmit={e => submitHandler(e)} >
            <div className={props.className ? `autocomplete ${props.className}` : "autocomplete"}>
                <div className="input-container">
                    <input
                        id="searchbox-input" type="text" className={inputClassName}
                        name="myCountry" placeholder={props.placeholder ? props.placeholder : "Search"}
                        onChange={e => inputHandler(e)}
                    />
                    <IconSearch size={26} strokeWidth={3} className="input-icon" onClick={e => submitHandler(e)} />
                </div>
                {open && createAutoCompleteList(values)}
            </div>
        </form>
    )

}


*/
/*


export class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state ={
            input:"",
            open:false,
            values:this.props.values ? this.props.values : [],
            activeItem:null,
        }

        this.inputClassName = this.setInputClassName()
    }
    setInputClassName = () => {
        let cls = this.props.className ? this.props.className : "searchbox-input";
        if (this.props.transparent) {
            cls += " transparent"
        }
        if (this.props.animate) {
            cls += " animate"
        }
        return cls
    }

    async inputHandler(e){
        //if autocomplete list is open, close it
        if (this.state.open===true){
            this.setState({open:false})
        }
        //if data is local and supplied
        if (this.props.data){
            const result = this.props.data.filter(d => this.resultValidation(d).includes((e.target.value).toLowerCase()))
            if (result && result.length > 0){
                this.setState({values:result, open:true})
            }
        }
        //if data is remote
        else if (this.props.query && e.target.value.length>2){
            const result = await this.props.query((e.target.value).toLowerCase())
            if (result && result.length > 0) {
                this.setState({ values: result, open: true })
            }
        }
        else{
            console.log("there is no already supplied data or supplied remote query function")
        }
    }
    clickHandler(e, value){
        this.setState({ open: false })
        e.preventDefault();
        if (value) {
            this.props.onClick(value);
        }
    }
    submitHandler(e) {
        //console.log(this.state)
        this.setState({ open: false })
        e.preventDefault();
        this.props.onSubmit(this.state.values);
    }

    resultValidation(data){
        if (typeof data ==="string"){
            return data.toLowerCase()
        }
        else if (typeof data === "object"){
            return data.name.toLowerCase
        }
        else{
            console.log("!!!! Data is neither string neither object!!")
            return null
        }
    }

    componentDidMount() {
        this.formRef = ReactDOM.findDOMNode(this)
        this.ref = this.formRef.firstChild
        this.inputRef = this.ref.firstChild
        document.addEventListener("click", () => this.setState({open:false}));
        //console.log("ref",this.inputRef)
        //autocomplete(ref.getElementById("myInput"))
    }
    componentWillUnmount() {
        const ref = ReactDOM.findDOMNode(this)
        document.removeEventListener("click", () => this.setState({ open: false }));

    }
    createAutoCompleteList = (values) =>(
        <div className="autocomplete-items" >
            {values.map(v => this.createListItem(v))}
        </div>
    )
    createListItem = (value) => {
        const isString = typeof value === "string";

        if (isString) return(
            <div
                className={value == this.state.activeItem ? "ac-list-item active" : "ac-list-item"}
                onClick={(e) => this.clickHandler(e,value)}
            >
                <p className="ac-item-text">{value}</p>
            </div>
        )
        var imageSrc;
        var text;
        if(this.props.item){
            imageSrc = value[this.props.item.image];
            text = value[this.props.item.text];
        }
        return (
            <div className={value == this.state.activeItem ? "ac-list-item active" : "ac-list-item"}
                onClick={(e) => this.clickHandler(e,value)}
            >
                {imageSrc && <img src={imageSrc}  className="ac-item-img"/>}
                {text && <p className="ac-item-text">{text}</p>}
            </div>
        )
    }


    render() {
        const { createAutoCompleteList } = this;
        const { values, open }  = this.state;
        //console.log("values", this.state.values)
        return (
            <div class={this.props.className ? `autocomplete ${this.props.className}` : "autocomplete"}
                //style={{width:"100px"}}
                >
                <form autocomplete="off" onSubmit={this.submitHandler.bind(this)} >
                    <div class="input-container">
                        <input
                            id="searchbox-input" type="text" className={this.inputClassName}
                            name="myCountry" placeholder={this.props.placeholder ? this.props.placeholder : "Search"}
                            onChange={e => this.inputHandler(e)}
                            />
                        <IconSearch size={28} strokeWidth={3} className="input-icon" onClick={this.submitHandler.bind(this)}/>
                    </div>
                    {open && createAutoCompleteList(values)}
                </form>
            </div>
        )
    }
}
*/