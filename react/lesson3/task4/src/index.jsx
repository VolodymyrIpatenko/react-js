import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import Greeting from "./Greeting.jsx";

const yearOfBirth = new Date("2005-01-01").getFullYear();
const currentYear = new Date().getFullYear();
const birthDate = currentYear - yearOfBirth;

const rootElement = document.querySelector('#root');
	
ReactDOM.render(<Greeting firstName="John" lastName="Doe" birthDate={birthDate} />, rootElement);
 