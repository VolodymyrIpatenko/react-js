import React from "react";
import UserForm from "./UserForm.jsx";

const Profile = ({userData}) => {
	return (
		<div className="column">
			<UserForm userData={userData} />
		</div>
	);
};

export default Profile;