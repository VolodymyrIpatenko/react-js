import React, { Component } from 'react';
import Greeting from './Greeting.jsx';

class Auth extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: true,
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
			<div className="panel">
				<Greeting isLoggedIn={this.state.isLoggedIn} />
					{this.state.isLoggedIn ? (
						<button onClick={this.handleLogout}>Logout</button>)
						: (
							<button onClick={this.handleLogin}>Login</button>
					 )}
			</div>
		);
	}
}

export default Auth;