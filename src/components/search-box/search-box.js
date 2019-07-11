import React, { Component } from 'react'
import styles from "./styles.css"
import ReactDOM from 'react-dom';
import { autocomplete } from "./function"

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

const IconSearch = ({ className = "", size = 24, stroke = "currentColor", strokeWidth = 2, fill = "none", onClick = null }) => (<svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className + " feather feather-search"}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>)
