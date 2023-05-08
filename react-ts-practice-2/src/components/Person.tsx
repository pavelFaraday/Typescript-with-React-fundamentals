/* -------------------------------------------------------------------------- */
/*                  2. Typing Props - typing Objects as props                 */
/* -------------------------------------------------------------------------- */

type PersonProps = {
	fullname: {
		firstName: string;
		lastName: string;
	};
};

const Person = (props: PersonProps) => {
	return (
		<div>
			<h4>
				Your name is {props.fullname.firstName}{" "}
				{props.fullname.lastName} 😁
			</h4>
		</div>
	);
};

export default Person;
