import React from 'react';
import moment from "moment";
import "./index.scss";

const formatDate = date => moment('1991-01-17T11:11:11.819Z').format("DD MMM YYYY");

function Profile (userData)  {
	return (
		<div>
    <div className="profile__name">
			{userData.firstName} {userData.lastName}
		</div>
		<div className="profile__birth">
			Was born {formatDate(userData.birthDate)} in {userData.birthPlace}
			</div>
			</div>
  );
};

export default Profile;