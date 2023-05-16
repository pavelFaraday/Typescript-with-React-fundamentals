import { useState } from "react";

type AuthUser = {
	name: string;
	email: string;
};

const User = () => {
	const [user, setUser] = useState<null | AuthUser>(null);

	const handleLogin = () => {
		setUser({
			name: "Giorgi",
			email: "email@example.com",
		});
	};
	const handleLogOut = () => {
		setUser(null);
	};
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogOut}>Logout</button>
			<div>{user !== null ? `User name is ${user?.name}` : null}</div>
			<div>{user !== null ? `User email is ${user?.email}` : null}</div>
		</div>
	);
};

export default User;
