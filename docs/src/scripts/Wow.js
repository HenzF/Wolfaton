import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "tailwindcss/tailwind.css";

class Wow extends Component {
    render() {
        return (
            <div className="md:flex bg-gray-100 rounded-lg p-8 md:p-0 m-4 drop-shadow-md">
                <h1 className="text-xl font-semibold md:text-center mx-96 m-4 align-middle mx-auto font-serif animate-bounce">
                    Welcome to W0lfaton!
                </h1>
            </div>
        );
    }
}
export default hot(module)(Wow);