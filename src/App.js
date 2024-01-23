import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import "./App.css";
import ListingsList from "./components/ListingTest";
import BuyersList from "./components/BuyersTest";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Navbar />

			<h1>Hello there, this is a real estate app</h1>
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/listings" element={<ListingsList />} />
					<Route path="/buyers" element={<BuyersList />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
