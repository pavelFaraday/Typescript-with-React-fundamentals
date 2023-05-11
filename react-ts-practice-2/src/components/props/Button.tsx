type ButtonProps = {
	handleClick: () => void; // VOID - function does not return anything
};

const Button = (props: ButtonProps) => {
	return <button onClick={props.handleClick}>click</button>;
};

export default Button;
