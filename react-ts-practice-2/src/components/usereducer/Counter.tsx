import { useReducer } from "react";

const initialState = { count: 0 };

// "state" is an object & it has "count" property
type stateType = {
	count: number;
};

// "action" is an object & it has "type" and "payload" properties
type actionType = {
	type: string;
	payload: number;
};

function reducer(state: stateType, action: actionType) {
	switch (action.type) {
		case "increment":
			return { count: state.count + action.payload };
		case "decrement":
			return { count: state.count - action.payload };
		default:
			return state;
	}
}

const Counter = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<>
			Count: {state.count}
			<button
				onClick={() => dispatch({ type: "increment", payload: 10 })}
			>
				Increment 10
			</button>
			<button
				onClick={() => dispatch({ type: "decrement", payload: 10 })}
			>
				Decrement 10
			</button>
		</>
	);
};

export default Counter;
