import React,{Component} from 'react';
import Offline from "./Offline.jsx";
import Online from "./Online.jsx";

const Status = props => {
	if (props.isLoggedIn) {
		return <Online />;
	}
	return <Offline />;
}

export default Status ;