import "./App.css";
import Greet from "./components/Greet";

function App() {
	return (
		<div className="App">
			<Greet name="Typescript" dayCount={8} isLoggedIn={true} />
		</div>
	);
}

export default App;
