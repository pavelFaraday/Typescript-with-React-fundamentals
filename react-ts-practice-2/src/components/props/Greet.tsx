/* -------------------------------------------------------------------------- */
/*                  1. Typing Props - string, number & Booleans               */
/*                  2. Typing Props - Optional Types with "?"                 */
/* -------------------------------------------------------------------------- */

type GreetProps = {
	name: string;
	dayCount?: number;
	isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
	const { dayCount = 7 } = props;
	return (
		<>
			<h3>
				{props.isLoggedIn
					? `Welcome, In the world of ${props.name}! You can learn it in ${dayCount} days.`
					: `You need To LogIn.`}
			</h3>
		</>
	);
};

export default Greet;
