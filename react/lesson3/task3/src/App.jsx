import React from "react";
import Comment from "./Comment";

const UserInfo = {
	name: "Tom",
	avatarUrl: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
};

const App = () => {
	return (
		<Comment
			author={UserInfo}
			text="Good job!"
			date={new Date("2022-01-01T11:32:19.566Z")}
		/>
	)
};

export default App;