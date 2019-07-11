import React, { Component } from 'react'
import styles from "./navbar.css"

export class NavBar extends Component{
    constructor(props) {
        super(props);
        
        this.BrandItems = this.props.children.filter(child => Object.getOwnPropertyNames(child.props).includes("brand"))
        this.NavItems = this.props.children.filter(child => !Object.getOwnPropertyNames(child.props).includes("brand"))

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
        this.RightItemsAll =[...this.SearchItem, ...this.RightItems]
        this.RightItemsAllReverse = [...this.RightItems, ...this.SearchItem]


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
            <div className={toggleOpen ? `${this.className} + responsive`: this.className} id="myTopnav">
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

            </div>
        )
    }
}




export const NavLink = (props) => {
    console.log(props)
    function setClassName(){
        var typeName = "nav-link";
        if(props.brand){
            typeName = typeName + " brand"
        }
        else if (props.search){
            typeName = typeName + " search"
        }
        else if( props.right ){
            typeName = typeName + " right"
        }
        else{
            typeName = typeName + " left"
        }
        var className = props.className ? `${props.className} ${typeName}` : `${typeName}`
        return className
    }
    const className = setClassName()
    return (
        <div className={className}>
            {props.label ? props.label : props.children}
        </div>
    )
}