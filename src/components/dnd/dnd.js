import React from 'react'
import { useState, useEffect } from "react";

import "./dnd.css"

export const Dnd = (props) =>{
    const allItems = props.items
    const [ BoxOne, setBoxOne ] = useState(allItems);
    const [ BoxTwo, setBoxTwo ] = useState([]);
    console.log("box-one",BoxOne)
    console.log("box-two",BoxTwo)

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        console.log(ev.target)
        const item = allItems.filter(i => i.name === ev.target.innerHTML )[0]
        console.log("dragging", item)
        ev.dataTransfer.setData("object", jsonize(item));
    }

    function drop(ev, box, boxsetter) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("object");
        console.log("data", data)
        console.log("ev drop", ev.target)
        const newBox = [...box, jsonize(data)]
        if (newBox !== box){
            boxsetter([...newBox])
        }
    }

    function leave(e,box, boxsetter){
        const item = allItems.filter(i => i.name === e.target.innerHTML )[0]
        const newBox = box.filter(b => b.id !== item.id)
        if (newBox !== box){
            boxsetter([...newBox])
        }
    }

    const DragBox = ({items, itemSetter}) =>(
        <div className="list" 
            onDragOver={e => e.preventDefault()} 
            onDrop={e => drop(e, items, itemSetter)} 
            onDragLeave={e => leave(e, items, itemSetter)}
        >
            {items.map(i => (
                <div 
                    key={i.id} className="list-item"
                    draggable={true} 
                    onDragStart={e => drag(e)}
                >
                    {i.name}
                </div>
            ))}
        </div>
    )

    return (
        <div className="container">
            <DragBox items={BoxOne} itemSetter={setBoxOne} />
            <DragBox items={BoxTwo} itemSetter={setBoxTwo} />

        </div>
    )
}

function jsonize(item){
    if (typeof item === "String") return JSON.parse(item)
    return JSON.stringify(item)
}