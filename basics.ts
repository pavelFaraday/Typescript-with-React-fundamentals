// Primitives: number,  string, boolean
// Complex Types: arrays, objects
// Type Inference
// Union Types
// Type Aliases
// Function Types, parameters
// Generics

/* -------------------------------------------------------------------------- */
/*                                 Primitives                                 */
/* -------------------------------------------------------------------------- */

// default type - don't assign any type! So, any type is allowed!
// It should be used very rarely;

/* let person: any; === let person;  */
let person: any;

let age: number = 24;
let username: string = "John";
let isLoggedin: boolean = false;

/* -------------------------------------------------------------------------- */
/*                                Complex types                               */
/* -------------------------------------------------------------------------- */

// array must contain only strings
let hobbies: string[] = ["read", "swim", "sing"];
// array must contain only numbers
let kilometres: number[] = [56, 899, 120];
// array must contain only booleans
let isMerried: boolean[] = [true, false];

/* -------------------------------------------------------------------------- */

// define inline structure of an object
let user: {
	name: string;
	age: number;
};

user = {
	name: "Luka",
	age: 45,
};

/* -------------------------------------------------------------------------- */

// define an Array which contains Object with specific structure
let people: {
	name: string;
	age: number;
}[];

people = [
	{
		name: "Luka",
		age: 45,
	},
	{
		name: "Nino",
		age: 20,
	},
];

/* -------------------------------------------------------------------------- */

// Type Inference
// type inference is used to provide type information when there is no explicit type annotation.
// If you immediately initialize variable without type, typescript will look at the value type here - so, it will see that we stored a string in that variable. And it will then use that value type as an inferred type for this variable. And if you then try to assign a different type thereafter, you will get an error because of type inference;

let course = "Hello World";
course = 788;

/* -------------------------------------------------------------------------- */

// Union Types
let measure: string[] | number = 6788;
let movie: number | string | boolean = false;

measure = ["100km", "20 meter"];
movie = "Lord of Rings";

/* -------------------------------------------------------------------------- */

// Type Aliases
// Aliases and Interfaces allows types to be easily shared between different variables/objects.
// Interfaces are similar to type aliases, except they only apply to object types.
// Type aliases are difing with keyword `type`.

/* 
type Neighbor = {
	name: string;
	age: number;
}

let member: {
	name: string;
	age: number;
};
let neighborhood: {
	name: string;
	age: number;
}[];

👆👆👆＝＝＝👇👇👇
*/

type Neighbor = {
	name: string;
	age: number;
};

let member: Neighbor;
let neighborhood: Neighbor[];

member = {
	name: "Hello",
	age: 16,
};

neighborhood = [
	{
		name: "Milana",
		age: 29,
	},
];

/* -------------------------------------------------------------------------- */

// Function Types, parameters

// example 1
const myFunc = (a: number, b: number): number => {
	return a * b;
};

// example 2 - with union types
const calculateFunc = (a: number, b: number, c: boolean): number | boolean => {
	let timesX = a * b;
	if (timesX > 0) {
		c = true;
	} else {
		c = false;
	}
	return c;
};

// example 3 - "void" means that this functions never returns something, also it means "undefined"
const someFunc = (value: any): void => {
	console.log(value);
};

/* -------------------------------------------------------------------------- */

// Generics
// Generics allow creating 'type variables' that don't need to explicitly define the types that they use.
// Generics makes it easier to write reusable code.
// Generics with functions help make more generalized methods which more accurately represent the types used and returned.

/* 
While using any is certainly generic in that it will cause the function to accept `any` and all types for the type of arg, we actually are losing the information about what that type was when the function returns. If we passed in a number, the only information we have is that any type could be returned.

Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned. Here, we will use a type variable, a special kind of variable that works on types rather than values.

We’ve now added a type variable `Type` to the identity function. This `Type` allows us to capture the type the user provides (e.g. number), so that we can use that information later. Here, we use Type again as the return type. On inspection, we can now see the same type is used for the argument and the return type. This allows us to traffic that type information in one side of the function and out the other.

We say that this version of the identity function is generic, as it works over a range of types. Unlike using any, it’s also just as precise (i.e., it doesn’t lose any information) as the first identity function that used numbers for the argument and return type.

*/

// Example 1
function identity<T>(arg: T): T {
	return arg;
}

// Example 2
function insertAtBeginning<T>(array: T[], value: T) {
	const newArray = [value, ...array];
	return newArray;
}
const demoArray = [1, 2, 3, 4];
const updatedArray = insertAtBeginning(demoArray, -1); // -1, 1, 2, 3, 4 ==== number ➡️ number
const stringArray = insertAtBeginning(["a", "b", "c"], "d"); //  "d", "a", "b", "c" ==== string ➡️ string

updatedArray[0].split(""); // error, because numbers can not be splitted - without Generics error will not be notified!
stringArray[0].split("");

/* -------------------------------------------------------------------------- */
