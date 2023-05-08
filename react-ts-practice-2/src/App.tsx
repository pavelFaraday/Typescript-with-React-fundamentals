import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";

function App() {
	const personFullName = {
		firstName: "John",
		lastName: "Doe",
	};

	return (
		<div className="App">
			<Greet name="Typescript" dayCount={8} isLoggedIn={true} />
			<Person fullname={personFullName} />
		</div>
	);
}

export default App;
