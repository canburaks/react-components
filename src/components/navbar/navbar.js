import React from 'react'
import { useState } from "react";

import styles from "./navbar.css"

export const NavBar = (props) => {
    const [ toggleOpen, setToggle] = useState(false);

    const BrandItems = props.children.filter(child => Object.getOwnPropertyNames(child.props).includes("brand"))
    const SearchItem = props.children.filter(child => Object.getOwnPropertyNames(child.props).includes("search"))
    const RightItems = props.children.filter(child => Object.getOwnPropertyNames(child.props).includes("right"))
    const LeftItems = props.children.filter(child =>
        !Object.getOwnPropertyNames(child.props).includes("right") &&
        !Object.getOwnPropertyNames(child.props).includes("brand") &&
        !Object.getOwnPropertyNames(child.props).includes("search")
    )


    const className = setClassName()
    const RightItemsAll = orderRightItems()
    const RightItemsAllReverse = orderRightItems(true)
    
    //console.log("children", props.children)

    
    function orderRightItems(reverse = false) {
        var result = [];
        if (reverse) {
            if (SearchItem && SearchItem.length > 0) {
                result = [...SearchItem]
            }
            if (RightItems && RightItems.length > 0) {
                result = [...RightItems, ...result]
            }
        }
        else {
            if (SearchItem && SearchItem.length > 0) {
                result = [...SearchItem]
            }
            if (RightItems && RightItems.length > 0) {
                result = [...result, ...RightItems]
            }
        }
        return result
    }

    function setClassName() {
        var cls = props.className ? props.className : "";
        if (props.fixed) {
            cls = cls + " fixed"
        }
        //console.log("cls", cls)
        return cls + " topnav"
    }

    return (
        <nav className={toggleOpen ? `${className} + responsive` : className} id="myTopnav">
            <div className="nav-left-box">
                {BrandItems.length > 0 && BrandItems[0]}
                {LeftItems.length > 0 && LeftItems.map(link => link)}
            </div>


            <div className="nav-right-box">
                {!toggleOpen && RightItemsAll
                    ? RightItemsAll.map(link => link)
                    : RightItemsAllReverse.map(link => link)
                }
            </div>


            <svg onClick={() => setToggle(!toggleOpen )}
                className="icon feather feather-more-vertical"
                xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
            </svg>

        </nav>
    )
}



export const NavLink = (props) => {
    //console.log("link",props)
    function setClassName() {
        var typeName = props.className ? `${props.className} nav-link` : `nav-link`
        if (props.brand) {
            typeName = typeName + " brand"
        }
        else if (props.search) {
            typeName = typeName + " search"
        }
        else if (props.right) {
            typeName = typeName + " right"
        }
        else {
            typeName = typeName + " left"
        }
        return typeName
    }
    const className = setClassName()
    return (
        <div className={className} onClick={props.onClick}>
            {props.label ? props.label : props.children}
        </div>
    )
}
/*
export class NavBar extends Component{
    constructor(props) {
        super(props);
        
        this.BrandItems = this.props.children.filter(child => Object.getOwnPropertyNames(child.props).includes("brand"))
        this.SearchItem = this.props.children.filter(child => Object.getOwnPropertyNames(child.props).includes("search"))
        this.RightItems = this.props.children.filter(child => Object.getOwnPropertyNames(child.props).includes("right"))
        this.LeftItems = this.props.children.filter(child => 
            !Object.getOwnPropertyNames(child.props).includes("right") && 
            !Object.getOwnPropertyNames(child.props).includes("brand") &&
            !Object.getOwnPropertyNames(child.props).includes("search") 
        )


        //console.log("children",this.props.children )
        this.state = {
            toggleOpen:false 
        }   

        this.className = this.setClassName()
        this.RightItemsAll = this.orderRightItems()
        this.RightItemsAllReverse = this.orderRightItems(true)


    }
    orderRightItems(reverse=false){
        var result = [];
        if (reverse){
            if (this.SearchItem && this.SearchItem.length>0){
                result = [...this.SearchItem]
            }
            if (this.RightItems && this.RightItems.length > 0) {
                result = [...this.RightItems, ...result]
            }
        }
        else{
            if (this.SearchItem && this.SearchItem.length > 0) {
                result = [...this.SearchItem]
            }
            if (this.RightItems && this.RightItems.length > 0) {
                result = [...result, ...this.RightItems]
            }
        }
        return result
    }
    setClassName() {
        var cls = this.props.className ? this.props.className : "";
        if (this.props.fixed) {
            cls = cls + " fixed"
        }
        console.log("cls", cls)
        return cls + " topnav"
    }
    render(){
        console.log("BrandItems", this.BrandItems)
        console.log("RightItems", this.RightItems)
        console.log("LeftItems", this.LeftItems)
        const { toggleOpen } = this.state;
        return(
            <nav className={toggleOpen ? `${this.className} + responsive`: this.className} id="myTopnav">
                <div className="nav-left-box">
                    {this.BrandItems.length > 0 && this.BrandItems[0]}
                    {this.LeftItems.length > 0 && this.LeftItems.map(link => link)}
                </div>
                

                <div className="nav-right-box">
                    {!toggleOpen && this.RightItemsAll 
                        ?  this.RightItemsAll.map(link => link) 
                        : this.RightItemsAllReverse.map(link => link) 
                    }
                </div>
                
                
                <svg onClick={() => this.setState({ toggleOpen: !toggleOpen })}
                    class="icon feather feather-more-vertical"
                    xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                    fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                </svg>

            </nav>
        )
    }
}

*/

