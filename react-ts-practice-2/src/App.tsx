import "./App.css";
import Button from "./components/props/Events/ClickEvent/Button";
import Button2 from "./components/props/Events/ClickEvent/Button2";
import Button3 from "./components/props/Events/ClickEvent/Button3";
import Input from "./components/props/Events/OnChange/Input";
import Greet from "./components/props/Greet";
import Heading from "./components/props/Children/Heading";
import Oscar from "./components/props//Children/Oscar";
import Person from "./components/props/Person";
import PersonalList from "./components/props/PersonalList";
import Status from "./components/props/Status";
import Container from "./components/props/Styles/Container";

function App() {
	const personFullName = {
		firstName: "John",
		lastName: "Doe",
	};

	const nameList = [
		{
			firstName: "Bruce",
			lastName: "Wayne",
		},
		{
			firstName: "Klark",
			lastName: "Kent",
		},
		{
			firstName: "Princess",
			lastName: "Robota",
		},
	];

	return (
		<div className="App">
			<Button
				handleClick={() => {
					console.log("button Clicked");
				}}
			/>
			<Button2
				handleClick2={(event) => {
					console.log("button2 Clicked", event);
				}}
			/>
			<Button3
				handleClick3={(event, id) => {
					console.log("button3 Clicked", event, id);
				}}
			/>
			<Input value="" handleChange={(event) => console.log(event)} />
			<Greet name="Typescript" dayCount={8} isLoggedIn={true} />

			<Greet name="HTML" isLoggedIn={true} />
			<Heading>Children props as String</Heading>
			<Oscar>
				<Heading> Oscar Goes to Leonardo Dicaprio!</Heading>
			</Oscar>
			<Person fullname={personFullName} />
			<PersonalList names={nameList} />
			<Status status="loading" />

			<Container styles={{ border: "1px solid red", padding: "1rem" }} />
		</div>
	);
}

export default App;
