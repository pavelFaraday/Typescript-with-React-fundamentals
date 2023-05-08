/* -------------------------------------------------------------------------- */
/*                        4. Typing Props - Union Types                       */
/* -------------------------------------------------------------------------- */

// the UNION type is the set of every **possible string** literal that could be represented by each union member

type StatusProps = {
	status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
	let message;
	if (props.status === "loading") {
		message = "Loading...";
	} else if (props.status === "success") {
		message = "Data fetched successfully!";
	} else if (props.status === "error") {
		message = "Error fetching data";
	}
	return <h2>Status - {message}</h2>;
};

export default Status;
