import React from 'react'
import { useState, useEffect } from "react";

import "./NavBar.css"


export const NavBar = (props) => {
    console.log("navbar", props)
    useEffect(()=> {
    const indicator = document.querySelector('.nav-indicator');
    const items = document.querySelectorAll('.nav-item');

    function handleIndicator(el) {
    items.forEach(item => {
        item.classList.remove('is-active');
        item.removeAttribute('style');
    });

    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.left = `${el.offsetLeft}px`;
    indicator.style.backgroundColor = el.getAttribute('active-color');

    el.classList.add('is-active');
    el.style.color = el.getAttribute('active-color');
    }


    items.forEach((item, index) => {
    item.addEventListener('click', e => {handleIndicator(e.target);});
    item.classList.contains('is-active') && handleIndicator(item);
    });
    })
    return (
    <nav className="nav">
        <a href="#" className="nav-item is-active" active-color="orange">Home</a>
        <a href="#" className="nav-item" active-color="green">About</a>
        <a href="#" className="nav-item" active-color="blue">Testimonials</a>
        <a href="#" className="nav-item" active-color="red">Blog</a>
        <a href="#" className="nav-item" active-color="rebeccapurple">Contact</a>
        <span className="nav-indicator"></span>
    </nav>
)
}