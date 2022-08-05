import React from "react";

const UserAvatar = props => {
	return (
		<img
			className="user-avatar"
			src={props.avatarUrl}
			alt={props.name}
		/>
	);
};

export default UserAvatar;