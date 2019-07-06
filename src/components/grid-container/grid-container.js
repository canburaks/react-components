import React, { useState } from "react";
import gstyle from "./gstyle.css"


export class GridContainer extends React.Component {
    constructor(props) {
        super(props);
        this.debug = this.props.debug ? this.props.debug : true;
        this.state = {
            items:[] 
        };
    }


    trace(text, obj) {
        if (this.debug === false) {
            return;
        }
        if (this.debug) {
            if (obj) {
                console.log(`${text} `, obj)
            }
            else {
                console.log(text)
            }
        }
    }

    resize() {
        this.trace("resizing..")
    }
    componentDidMount() {
        this.resize()
        window.addEventListener("resize", this.resize, { passive: true })
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize)
    }

    render() {

        //this.trace("render ", this.state)
        const { activeVideo, videos, theme } = this.state;
        return (
            <div>

            </div>
        )
    }
};
