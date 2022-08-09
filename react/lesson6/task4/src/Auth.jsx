import React, { Component } from 'react';
import Status from './Status.jsx';

class Auth extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			isLoggedIn: false,
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
			<Status isLoggedIn={this.state.isLoggedIn} />
				{this.state.isLoggedIn ? (
					<div className="status">
				    <span className="status__text">Offline</span>
						<button onClick={this.handleLogout} className="status__btn">Reconnect</button>
					</div>
				)
					:(
					<div className="status">
				    <span className="status__text">Online</span>
						<button onClick={this.handleLogin} className="status__btn">All good!</button>
					</div>
				)
					}
					</>
					);
				}
			}
			
			export default Auth;