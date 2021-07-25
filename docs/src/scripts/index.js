import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Header from "./Header.js";
import Wow from "./Wow.js";
import "tailwindcss/tailwind.css";


ReactDOM.render(<Header />, document.getElementById("head"));
ReactDOM.render(<Wow />, document.getElementById("wow"));
ReactDOM.render(<App />, document.getElementById("content"));

function getHome() {
    window.location.replace("http://www.w0lfaton.com/index.html");
}
function getBlog() {

}
function getAbout() {

}

document.getElementById("blogBtn").onclick = function() {getBlog()};
document.getElementById("aboutBtn").onclick = function() {getAbout()};
document.getElementById("indexBtn").onclick = function() {getHome()};