import React from 'react';

const yearOfBirth = new Date("2005-01-01").getFullYear();
const currentYear = new Date().getFullYear();
const birthDate = currentYear - yearOfBirth;

export default function Greeting(props) {
	return (
		<div className="greeting">
			{`My name is ${props.firstName} ${props.lastName}. I'm ${props.birthDate} years old`}
		</div>
	);
}
