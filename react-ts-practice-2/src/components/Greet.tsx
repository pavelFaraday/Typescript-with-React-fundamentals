type GreetProps = {
	name: string;
};

const Greet = (props: GreetProps) => {
	return (
		<>
			<h2>Welcome, In the world of {props.name}!</h2>
		</>
	);
};

export default Greet;
