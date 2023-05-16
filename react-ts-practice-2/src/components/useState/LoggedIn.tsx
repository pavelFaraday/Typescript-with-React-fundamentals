import { useState } from "react";

/* 
## Type Inference
Type inference is used to provide type information when there is no explicit type annotation.
With useState Hook now is working rule of "Type Inference".
*/

const LoggedIn = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = () => {
		setIsLoggedIn(true);
	};
	const handleLogOut = () => {
		setIsLoggedIn(false);
	};
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogOut}>Logout</button>
			<div>User is {isLoggedIn ? "Logged in" : " Logged out"} </div>
		</div>
	);
};

export default LoggedIn;
