import { useState } from "react";
import AddItem from "./AddItem";
import ItemList from "./ItemList";
import Item from "./Item";

const BuyersList = () => {
	const [Buyers, setBuyers] = useState([]);
	return (
		<div className="BuyersListWrapper">
			<h2> these are your clients seeking to buy property</h2>
			<ItemList buyers={Buyers} setBuyers={setBuyers} />
			<Item />
		</div>
	);
};

export default BuyersList;
