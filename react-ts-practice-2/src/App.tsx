import "./App.css";
import Text from "./components/Polymorphic/text";

function App() {
	return (
		<div className="App">
			<Text as="h1" size="lg">
				Heading LG
			</Text>
			<Text as="p" size="md">
				Heading MD
			</Text>
			<Text as="label" htmlFor="someID" size="sm" color="secondary">
				Label
			</Text>
		</div>
	);
}

export default App;
