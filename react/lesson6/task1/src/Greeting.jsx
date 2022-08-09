import React from 'react';
import ReactDOM from 'react-dom';
import GuestGreeting from "./GuestGreeting.jsx";
import UserGreeting from "./UserGreeting.jsx";

const Greeting = props => {
	if (props.isLoggedIn) {
		return <UserGreeting />;
	}
	return <GuestGreeting />;
}

export default Greeting;