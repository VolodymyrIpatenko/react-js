import React, { Component } from 'react';

class ConnectionStatus extends Component {
	state = {
		status: "online",
	};

	componentDidMount() {
	   window.addEventListener('offline', this.isOnline);
		window.addEventListener('online', this.isOnline);
	}

	componentWillUnmount() {
		window.removeEventListener("offline", this.isOnline);
		window.removeEventListener('online', this.isOnline);
	}

	isOnline = e => {
		this.setState({
			status: e.type,
		});
	};
	

	render() {
		let status = "status";

		this.state.status === "offline" ? (status += "status_offline") : status;
		return <div className={status}>{this.state.status}</div>
	}
}

export default ConnectionStatus;