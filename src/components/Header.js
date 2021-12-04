import React from "react";
import CounterButton from "./CounterButton";

const Header = (props) => {
	console.log("Header");

	return (
		<div>
			<h1 className="f1">RoboFriends</h1>
			<div>
				<CounterButton color={"red"} />
			</div>
		</div>
	);
};

export default React.memo(Header);
