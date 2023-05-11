type ButtonProps = {
	handleClick3: (
		event: React.MouseEvent<HTMLButtonElement>,
		id: number
	) => void;
};

const Button3 = (props: ButtonProps) => {
	return (
		<button onClick={(event) => props.handleClick3(event, 1)}>
			click 3
		</button>
	);
};

export default Button3;
