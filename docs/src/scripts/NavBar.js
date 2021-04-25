import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "tailwindcss/tailwind.css";

class NavBar extends Component {
    render() {
        return (
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
        );
    }
}
export default hot(module)(NavBar);