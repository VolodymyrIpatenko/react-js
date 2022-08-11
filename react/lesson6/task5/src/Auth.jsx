import React,{Component} from 'react';
import Spinner from './Spinner.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

export default class Auth extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
		};
	}
  
     logoutHandler = () => {
			this.setState({ isLoggedIn: false });
		};

		loginHandler = () => {
			this.setState({ isLoggedIn: true });
		};

	render() {
		return (
			<div className="panel">
				<Spinner size={this.state.isLoggedIn} />
				{this.state.isLoggedIn ? (
					<Logout onLogout={this.logoutHandler} />
				) : (
					<Login onLogin={this.loginHandler} />
				)}
			</div>
		);
	}
}