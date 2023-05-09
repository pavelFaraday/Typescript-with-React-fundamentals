import "./App.css";
import Greet from "./components/props/Greet";
import Heading from "./components/props/Heading";
import Person from "./components/props/Person";
import PersonalList from "./components/props/PersonalList";
import Status from "./components/props/Status";

function App() {
	const personFullName = {
		firstName: "John",
		lastName: "Doe",
	};

	const nameList = [
		{
			first: "Bruce",
			last: "Wayne",
		},
		{
			first: "Klark",
			last: "Kent",
		},
		{
			first: "Princess",
			last: "Robota",
		},
	];

	return (
		<div className="App">
			<Greet name="Typescript" dayCount={8} isLoggedIn={true} />
			<Person fullname={personFullName} />
			<PersonalList names={nameList} />
			<Status status="loading" />
			<Heading>Children props as String</Heading>
		</div>
	);
}

export default App;
