import { useState } from "react";

/* -------------------------------------------------------------------------- */
/*                               Type Assertion                               */
/* -------------------------------------------------------------------------- */
// "useState<AuthUser>({} as AuthUser)" means that useState initial value should be empty object, that have type of "AuthUser" by default

type AuthUser = {
	name: string;
	email: string;
};

const User = () => {
	const [user, setUser] = useState<AuthUser>({} as AuthUser);

	const handleLogin = () => {
		setUser({
			name: "Giorgi",
			email: "email@example.com",
		});
	};
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<div>{user !== null ? `User name is ${user?.name}` : null}</div>
			<div>{user !== null ? `User email is ${user?.email}` : null}</div>
		</div>
	);
};

export default User;
