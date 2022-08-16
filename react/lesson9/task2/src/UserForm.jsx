import React, { Component } from 'react';

class UserForm extends Component {
	state = {};
	
	handleChange = event => {
		const { name, value, checked, type } = event.target;
		
		const val = type === "checkbox" ? checked : value;
		
		this.setState({
			[name]: val,
		});
	};
	
	handleSubmit = event => {
		event.preventDefault();
		console.log(this.state);
	}
	
	render() {
		return (
			<form className="login-form" onSubmit={this.handleChange}>
				<h1 className="form-title">Profile</h1>
				<div className="form-control">
					<label className="form-label" htmlFor="name">Name</label>
					<input value={this.state.name} onChange={this.handleChange} className="form-input" type="text" id="name" name="name"/>
				</div>
				<div className="form-control">
					<label className="form-label" htmlFor="student">Student</label>
					<input onChange={this.handleChange} className="form-input" type="checkbox" id="student" name="student" />
				</div>
				<div className="form-control">
					<label value={this.state.occupation} className="form-label" id="occupation" htmlFor="occupation">Occupation</label>
					<select
						name="occupation"
						className="form-input"
					  onChange={this.handleChange}>
						<option value="london">London</option>
						<option value="new-york">New York</option>
						<option value="coconut">Sidney</option>
						<option value="berlin">Berlin</option>
					</select>
				</div>
				<div className="form-control">
					<label className="form-label" id="about" htmlFor="about">About</label>
					<textarea
						name="about"
						className="form-input"
					  onChange={this.handleChange}  
					></textarea>
				</div>
				<button className="submit-button" type="submit">Submit</button>
			</form>
		);
		}
}
	
export default UserForm;