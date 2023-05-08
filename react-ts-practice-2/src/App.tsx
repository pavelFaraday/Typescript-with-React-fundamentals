import "./App.css";
import Greet from "./components/props_typing/Greet";
import Person from "./components/props_typing/Person";
import PersonalList from "./components/props_typing/PersonalList";

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
		</div>
	);
}

export default App;
