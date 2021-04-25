import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "tailwindcss/tailwind.css";

class Header extends Component {
    render(){
        return (
            <div>
                <div className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 m-4">
                    <div className="container mx-auto rounded-full m-1 text-right">
                        <img className="object-center-top w-32 h-32 md:w-48 md:h-auto md:rounded-full rounded-full mx-auto m-4" src="resources/photo.png" alt="" width="200" height="200"/>
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
                        <div className="text-right">
                            <div className="text-gray-500 font-sans">
                                Navigation bar: 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default hot(module)(Header);