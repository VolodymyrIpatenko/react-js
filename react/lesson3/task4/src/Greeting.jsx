import React from 'react';

const yearOfBirth = new Date("2001-01-01").getFullYear();
const currentYear = new Date().getFullYear();
const getYearDiff = currentYear - yearOfBirth;

export default function Greeting(props) {
	return (
		<div className="greeting">
			{`My name is ${props.firstName} ${props.lastName}. I'm ${getYearDiff(props.birthDate)} years old`}
		</div>
	);
}
