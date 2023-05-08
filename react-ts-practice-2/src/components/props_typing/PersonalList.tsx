/* -------------------------------------------------------------------------- */
/*                  3. Typing Props - typing Array as props                 */
/* -------------------------------------------------------------------------- */

type PersonsListProps = {
	names: {
		first: string;
		last: string;
	}[];
};

const PersonalList = (props: PersonsListProps) => {
	return (
		<>
			<h2>
				{props.names.map((name) => {
					return (
						<h2 key={name.first}>
							{name.first} {name.last}
						</h2>
					);
				})}
			</h2>
		</>
	);
};

export default PersonalList;
