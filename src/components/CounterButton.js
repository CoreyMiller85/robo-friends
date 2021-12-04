import React, { useState } from "react";

const CounterButton = ({ color }) => {
	const [count, setCount] = useState(0);
	console.log("Counter Buttons");
	const updateCount = () => {
		setCount((prevState) => prevState + 1);
	};

	return (
		<div>
			<button color={color} onClick={updateCount}>
				Count: {count}
			</button>
		</div>
	);
};

export default React.memo(CounterButton);
