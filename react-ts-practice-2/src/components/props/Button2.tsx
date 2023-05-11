type ButtonProps = {
	handleClick2: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button2 = (props: ButtonProps) => {
	return <button onClick={props.handleClick2}>click 2</button>;
};

export default Button2;
