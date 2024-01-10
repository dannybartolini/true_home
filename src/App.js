import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import "./App.css";
import ListingsList from "./components/ListingTest";

function App() {
	return (
		<div className="App">
			<Navbar />
			<h1>Hello there, this is a real estate app</h1>
			<ListingsList />
		</div>
	);
}

export default App;
