import { useState } from "react";
import App from "../App";
import Item from "./Item";

const ItemList = ({ buyers, setBuyers }) => {
	//this is the form
	//how do I pass teh value from the buyer input form to the buyerlist wrapper? use props try to do it yourself
	// the value and setvalue sate should be in the wrapper component
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(buyers);
		setBuyers([...buyers, value]);
		setValue("");
	};
	return (
		<form className="buyersList" onSubmit={handleSubmit}>
			<input
				value={value}
				type="text"
				className="buyerInput"
				placeholder="What is your client's name?"
				onChange={(e) => setValue(e.target.value)}
			/>
			<button type="submit" className="list-button">
				Add client
			</button>
		</form>
	);
};

export default ItemList;
