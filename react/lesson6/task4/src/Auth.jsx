import React, { Component } from 'react';
import Status from './Status.jsx';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

class Auth extends Component {
	constructor(props) {
		super(props);

		this.state = {
    isOnline: true,
    isOffline: false,
  };
	}
	
	handleLogin = () => {
		this.setState({
			isLoggedIn: true,
		});
	}
	
	handleLogout = () => {
		this.setState({
			isLoggedIn: false,
		});
	}
	
	
	render() {
		return (
			<>
			{this.state.isOnline && <Online />} {!this.state.isOffline && <Offline />}
			</>
			);
		}
	}
	
	export default Auth;