/* -------------------------------------------------------------------------- */
/*                  3. Typing Props - typing Array as props                 */
/* -------------------------------------------------------------------------- */

import { Name } from "./Person.types";

type PersonsListProps = {
	names: Name[];
};

const PersonalList = (props: PersonsListProps) => {
	return (
		<>
			<h2>
				{props.names.map((name) => {
					return (
						<h2 key={name.firstName}>
							{name.firstName} {name.lastName}
						</h2>
					);
				})}
			</h2>
		</>
	);
};

export default PersonalList;
