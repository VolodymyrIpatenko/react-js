import React from "react";
import ReactDom from "react-dom";
import "./index.scss";
import Status from "./Status.jsx";

const rootElement = document.querySelector("#root");

ReactDom.render(<Status/>, rootElement);