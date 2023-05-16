/* -------------------------------------------------------------------------- */
/*                         6. Children Props as React.ReactNode               */
/* -------------------------------------------------------------------------- */

/* 

ReactNode is a type that represents a React element, an array of React elements, or a string, number, or boolean. It is defined in the react module and can be used to specify the type of a variable that can hold any of these types.

In this example, the children prop of the "Oscar" component is declared as type "ReactNode", which means that it can hold any React element (For this example, <Heading> component), an array of React elements, or a string, number, or boolean.

*/

type OscarProps = {
	children: React.ReactNode;
};

const Oscar = (props: OscarProps) => {
	return <div>{props.children}</div>;
};

export default Oscar;
