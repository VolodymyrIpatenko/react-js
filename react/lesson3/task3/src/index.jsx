import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import App from "./App";

const rootElement = document.querySelector("#root");

const userInfo = {
	name: "Tom",
	avatarUrl:"https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
};

ReactDOM.render(
	<App/>,
	rootElement
);