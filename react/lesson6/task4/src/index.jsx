import React, { Component} from "react";
import ReactDom from "react-dom";
import "./index.scss";
import Auth from "./Auth.jsx";

const rootElement = document.querySelector("#root");

ReactDom.render(<Auth/>, rootElement);