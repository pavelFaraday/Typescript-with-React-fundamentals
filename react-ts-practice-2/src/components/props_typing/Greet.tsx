/* -------------------------------------------------------------------------- */
/*                  1. Typing Props - string, number & Booleans               */
/* -------------------------------------------------------------------------- */

type GreetProps = {
	name: string;
	dayCount: number;
	isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
	return (
		<>
			<h3>
				{props.isLoggedIn
					? `Welcome, In the world of ${props.name}! You can learn it in ${props.dayCount} days.`
					: `You need To LogIn.`}
			</h3>
		</>
	);
};

export default Greet;
