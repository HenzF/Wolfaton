import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "tailwindcss/tailwind.css";

function NavigationBar(props) {
    if (!props.navBar) {
        return null;
    }
    return (
        <div>
            <div className="md:flex bg-gray-100 rounded-lg p-8 md:p-0 m-4">
                <nav className="align-top">
                    <button className="text-xl font-serif font-bold m-4" type="button" id="indexBtn">
                        Home
                    </button>
                    <button className="text-xl font-serif font-bold m-4" type="button" id="blogBtn">
                        Blog
                    </button>
                    <button className="text-xl font-serif font-bold m-4" type="button" id="aboutBtn">
                        About
                    </button>
                </nav>
            </div>
        </div>
    );
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};

        this.handleClick = this.handleClick.bind(this);  
    }
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render(){
        return(
            <div>
                <div className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 m-4">
                    <div className="container mx-auto rounded-full m-1 text-right animate-pulse">
                        <img className="object-center-top w-32 h-32 md:w-48 md:h-auto md:rounded-full rounded-full mx-auto m-4" src="/resources/photo.png" alt="" width="200" height="200"/>
                        <div className="object-center pt-6 md:p-8 text-center md:text-left space-y-4">
                            <blockquote className="text-justify mx-96">
                                <p className="text-lg font-semibold">
                                    “I love leeeaaaaaaaaarrrrniiiiiiiiing........   ...yeah”
                                </p>
                            </blockquote>
                            <figcaption className="font-medium text-justify mx-96">
                                <div className="text-cyan-600 font-serif">
                                    Henri Feldmann
                                </div>
                                <div className="text-gray-500 font-serif">
                                    Entrepreneur, Estonia
                                </div>
                            </figcaption>
                        </div>
                        <div>
                            <nav className="">
                                <div className="m-2 inline-block text-gray-500 font-sans">
                                    Navigation bar: 
                                </div>
                                <button id="navButton" className="inline-block border-dashed border-gray-500 border-opacity-100 border text-gray-500 font-sans w-10 h-10 font-bold rounded bg-yellow-50" onClick={this.handleClick}>
                                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
                <div>
                    <NavigationBar navBar={this.state.isToggleOn} />
                </div>
            </div>
        );
    }
}
export default hot(module)(Header);