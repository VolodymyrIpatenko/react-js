import React from "react";
import "./comment.scss";
import moment from "moment";
import UserInfo from "./UserInfo";

const formatDate = date => moment(date).format("DD MMM YYYY");

function Comment(props) {
  return (
		<div className="comment">
			<UserInfo author={props.author.user} />
			<div className="comment__text">
				{props.author.text}
			</div>
			<div className="comment__date">
				{formatDate(props.author.date)}
			</div>
    </div>
  );
}

export default Comment;
