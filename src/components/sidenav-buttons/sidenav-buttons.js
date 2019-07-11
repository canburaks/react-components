import React, { Component } from 'react'
import styles from "./styles.css"
import ReactDOM from 'react-dom';


export const SideNavButtons = (props) =>{
    const {children} = props;
    const isTop = props.top;
    const isRight = props.right


    const setClassName = () =>{
        var cls = props.className ? props.className : "";
        if (isTop) {
            cls +=" top"
        }
        else{
            cls += " bottom"
        }
        if (isRight) {
            cls += " right"
        }
        else{
            cls += " left"
        }
        return cls;
    }

    const className = setClassName()
    console.log("cls", className)
    return(
        <div id="mySidenav" class={className} styles={props.styles}>
            {props.children}
        </div>
    )
}

export class SideButton extends Component{
    constructor(props){
        super(props);
        this.className = this.props.className ? this.props.className + " side-button" : "side-button"
        this.state = {
            open:false
        }
        this.before = this.props.before;
        this.after = this.props.children
    }

    componentDidMount(){
        ReactDOM.findDOMNode(this).addEventListener("mouseenter", () => this.setState({open: true}))
        ReactDOM.findDOMNode(this).addEventListener("mouseleave", () => this.setState({open: false}))
    }
    componentWillUnmount(){
        ReactDOM.findDOMNode(this).removeEventListener("mouseenter", () => this.setState({open: true}))
        ReactDOM.findDOMNode(this).removeEventListener("mouseleave", () => this.setState({open: false}))
    }

    render(){
        const {open } = this.state;
        console.log("isopen", open)
        return(
            <div className={open ? `${this.className} open` : `${this.className} close`} onClick={this.props.onClick} style={this.props.styles}>
                {open ? this.after : this.before}
            </div>
        )
    }
}