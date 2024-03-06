import Navbar from "./components/Navbar";
import "./App.css";
import ListingsList from "./components/ListingsWrapper";
import BuyersWrapper from "./components/BuyersWrapper";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import BuyerProperties from "./components/BuyerProperties";

function App() {
	return (
		<div className="App">
			<Navbar />

			<h1>Hello there, this is a real estate app</h1>
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/listings" element={<ListingsList />} />
					<Route path="/buyers" element={<BuyersWrapper />} />
					<Route path="/buyerProperties" element={<BuyerProperties />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
