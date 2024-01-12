import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import "./App.css";
import ListingsList from "./components/ListingTest";
import BuyersList from "./components/BuyersTest";
import Home from "./components/Home";

function App() {
	console.log(window.location.pathname);
	let Component;
	switch (window.location.pathname) {
		case "/":
			Component = Home;
			break;
		case "/listings":
			Component = ListingsList;
			break;
		case "/buyers":
			Component = BuyersList;
			break;
	}
	return (
		<div className="App">
			<Navbar />

			<h1>Hello there, this is a real estate app</h1>
			<Component />
		</div>
	);
}

export default App;
