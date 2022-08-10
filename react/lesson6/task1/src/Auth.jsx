import React,{Component} from 'react';
import Greeting from './Greeting.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

export default class Auth extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
		};
  

		logoutHandler = () => {
			this.setState({ isLoggedIn: false });
		};

		loginHandler = () => {
			this.setState({ isLoggedIn: true });
		};

		render() 
			return (
				<div className="panel">
					<Greeting isLoggedIn={this.state.isLoggedIn} />
					{this.state.isLoggedIn ? (
						<Logout onLogout={this.logoutHandler} />
					) : (
						<Login onLogin={this.loginHandler} />
					)}
				</div>
			);
		};
}
