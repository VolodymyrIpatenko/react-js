import React from "react";
import ReactDom from "react-dom";
import "./index.scss";
import Mailbox from "./Mailbox.jsx";

const rootElement = document.querySelector("#root");

ReactDom.render(<Mailbox unreadMessages={["ф"]} />, rootElement);