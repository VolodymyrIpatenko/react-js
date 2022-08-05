import React from "react";
import Comment from "./Coment";

const userInfo = {
	name: "Tom",
	avatarUrl: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
};

const App = () => {
	return (
		<Comment
			user={userInfo}
			text="Good job!"
			date={new Date("2022-01-01T11:32:19.566Z")}
		/>
	)
};

export default App;