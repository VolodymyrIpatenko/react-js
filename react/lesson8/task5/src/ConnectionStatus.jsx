import React, { Component } from 'react';

class ConnectionStatus extends Component {
	state = {
		online:true,
	}

	componentDidMount() {
		window.addEventListener('online', this.isOnline);

		const { online, offline } = window.navigator.onLine;
		this.setStatus(online, offline);
	}
	isOnline=e=> {
		const { online, offline } = window.navigator.onLine;
		this.setStatus(online, offline)
	}
	
	setStatus = (online, offline) => {
		this.setState({
			online,
			offline,
		});
	}
	
	componentWillUnmount() {
		window.removeEventListener("online", this.isOnline);
	}

	render() {
			const { online } = this.state;
			if (this.state.online) {
				return (
					 <div className="status status_offline">Offline</div>
				)
			}
		
		return (
			<div className="status">Online</div>
		);
	}
}

export default ConnectionStatus;