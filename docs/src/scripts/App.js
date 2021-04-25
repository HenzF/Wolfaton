import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "tailwindcss/tailwind.css";

class App extends Component {
  render(){
    return(
      <div>
        <div className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 m-4">
        </div>
    </div>
  );
  }
}

export default hot(module)(App);