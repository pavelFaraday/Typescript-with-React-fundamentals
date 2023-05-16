import "./App.css";
import LoggedIn from "./components/useState/LoggedIn";
import User from "./components/useState/User";

function App() {
	return (
		<div className="App">
			<LoggedIn />
			<hr />
			<User />
		</div>
	);
}

export default App;
