import { useReducer } from "react";

const initialState = { count: 0 };

type stateType = {
	count: number;
};

// --- Typing ACTION ---
type actionUpdateType = {
	type: `increment` | `decrement`;
	payload: number;
};
type actionResetType = {
	type: `reset`;
};
type actionType = actionUpdateType | actionResetType;
// --- Typing ACTION ---

function reducer(state: stateType, action: actionType) {
	switch (action.type) {
		case "increment":
			return { count: state.count + action.payload };
		case "decrement":
			return { count: state.count - action.payload };
		case "reset":
			return initialState;
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
			<button onClick={() => dispatch({ type: "reset" })}>Reset</button>
		</>
	);
};

export default Counter;
