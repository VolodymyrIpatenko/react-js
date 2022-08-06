import React from 'react';

export default function Greeting(props) {
	return (
		<div className="greeting">
			{`My name is ${props.firstName} ${props.lastName}. I'm ${props.birthDate} years old`}
		</div>
	);
}
