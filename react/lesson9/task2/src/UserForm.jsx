import React, { Component } from 'react';

class UserForm extends Component {
	state = {name,about,occupation,student};
	
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
			<form className="login-form" onSubmit={this.handleSubmit}>
				<h1 className="form-title">Profile</h1>
				<div className="form-control">
					<label className="form-label" htmlFor="name">Name</label>
					<input value={this.state.name} onChange={this.handleChange} className="form-input" type="text" id="name" name="name"/>
				</div>
				<div className="form-control">
					<label className="form-label" htmlFor="student">Student</label>
					<input onChange={this.handleChange} value={this.state.student} className="form-input" type="checkbox" id="student" name="student" />
				</div>
				<div className="form-control">
					<label className="form-label" id="occupation" htmlFor="occupation">Occupation</label>
					<select
						value={this.state.occupation}
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
						value={this.state.about} 
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