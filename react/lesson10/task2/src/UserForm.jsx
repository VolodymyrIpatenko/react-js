import React,{ Component} from "react";

class UserForm extends Component {
	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			userData: {
				...this.state.userData,
				[name]: value
			}
		});
	}

	render() {
		return (
			<form className="user-form">
				<input type="text"
					name="firstName"
					className="user-form__input"
					value={this.props.userData.firstName}
					onChange={this.props.handleChange}
				/>
				<input type="text"
					name="lastName"
					className="user-form__input"
					value={this.props.userData.lastName}
					onChange={this.props.handleChange}
				/>
			</form>
		);
	};
}

export default UserForm;