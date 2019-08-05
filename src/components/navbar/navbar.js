import React from 'react';

export const NavBar2 = (props) => {
    return (
        <div>
            <nav className="navigation_1 bg-light pt-30 pb-30 text-center">
                <div className="container px-xl-0">
                    <div className="row justify-content-center align-items-center f-16">
                        <div className="mb-20 mb-lg-0 col-lg-3 text-lg-left">
                            <a href="#" className="logo link color-main">PIXLY</a>
                        </div>
                        <div className="col-lg-6">
                            <a href="#" className="link color-main mx-15">Movies</a>
                            <a href="#" className="link color-main mx-15">Lists</a>
                            <a href="#" className="link color-main mx-15">Directors</a>
                            <a href="#" className="link color-main mx-15"><i className="fas fa-search"></i></a>
                        </div>
                        <div className="mt-20 mt-lg-0 col-lg-3 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                            <a href="#" className="mr-20 link color-main">Sign In</a>
                            <a href="#" className="btn sm action-2 f-16">Sign Up</a>
                        </div>
                    </div>
                </div>
            </nav>

            <a className="open_menu color-main bg-light radius_full"><i className="fas fa-bars lh-40"></i></a>
        </div>
    )
}

/*
import "../desing-modo/css/style.css"
import "../desing-modo/css/framework.css"
import "./navbar.css"

export const NavBar2 = (props) => {
    return (
        <div>
            <nav className="navigation_1 bg-light pt-30 pb-30 text-center">
                <div className="container px-xl-0">
                    <div className="row justify-content-center align-items-center f-16">
                        <div className="mb-20 mb-lg-0 col-lg-3 text-lg-left">
                            <a href="#" className="logo link color-main">PIXLY</a>
                        </div>
                        <div className="col-lg-6">
                            <a href="#" className="link color-main mx-15">Movies</a>
                            <a href="#" className="link color-main mx-15">Lists</a>
                            <a href="#" className="link color-main mx-15">Directors</a>
                            <a href="#" className="link color-main mx-15"><i className="fas fa-search"></i></a>
                        </div>
                        <div className="mt-20 mt-lg-0 col-lg-3 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                            <a href="#" className="mr-20 link color-main">Sign In</a>
                            <a href="#" className="btn sm action-2 f-16">Sign Up</a>
                        </div>
                    </div>
                </div>
            </nav>

            <a className="open_menu color-main bg-light radius_full"><i className="fas fa-bars lh-40"></i></a>

            <div className="navigation_mobile bg-light type2">
                <a className="close_menu color-main"><i className="fas fa-times"></i></a>
                <div className="px-40 pt-60 pb-60 text-center inner">

                    <div><a href="#" className="f-heading f-22 link color-main mb-20">Home</a></div>

                    <div><a href="#" className="f-heading f-22 link color-main mb-20">Popular</a></div>

                    <div><a href="#" className="f-heading f-22 link color-main mb-20">Recent</a></div>

                    <div><a href="#" className="f-heading f-22 link color-main mb-20">Featured</a></div>

                    <div><a href="#" className="f-heading f-22 link color-main mb-20">Designers</a></div>

                    <div><a href="#" className="f-heading f-22 link color-main mb-20">Team</a></div>
                    <div><a href="#" className="f-12 link color-main op-7 text-uppercase sp-20 mb-20">Help</a></div>
                    <div><a href="#" className="f-12 link color-main op-7 text-uppercase sp-20 mb-20">F.A.Q.</a></div>
                    <div><a href="#" className="f-12 link color-main op-7 text-uppercase sp-20 mb-20">Support</a></div>
                    <div><a href="#" className="f-12 link color-main op-7 text-uppercase sp-20 mb-20">About Us</a></div>
                    <div><a href="#" className="f-12 link color-main op-7 text-uppercase sp-20 mb-20">Blog</a></div>
                    <div><a href="#" className="f-12 link color-main op-7 text-uppercase sp-20 mb-20">Careers</a></div>
                    <div className="socials mt-60">
                        <a href="#" target="_blank" className="link color-main f-18 mx-10"><i className="fab fa-twitter"></i></a>
                        <a href="#" target="_blank" className="link color-main f-18 mx-10"><i className="fab fa-facebook"></i></a>
                        <a href="#" target="_blank" className="link color-main f-18 mx-10"><i className="fab fa-dribbble"></i></a>
                        <a href="#" target="_blank" className="link color-main f-18 mx-10"><i className="fab fa-instagram"></i></a>
                        <a href="#" target="_blank" className="link color-main f-18 mx-10"><i className="fab fa-behance"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
*/
