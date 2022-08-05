import React from "react";
import UserAvatar from "./Avatar";

const UserInfo = props => {
	return (
		<div className="user-info">
			<img
				className="avatar"
				src={props.avatarUrl}
				alt={props.name}
			/>
			<div className="user-info__name">{props.name}</div>
		</div>
	);
};

export default UserInfo;