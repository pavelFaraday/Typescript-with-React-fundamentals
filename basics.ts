// Primitives: number,  string, boolean
// Complex Types: arrays, objects
// Function Types, parameters

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
