import { useState } from "react";
import AddItem from "./AddItem";
import AddBuyer from "./AddBuyer";
import BuyerItem from "./BuyerItem";
import BuyersList from "./BuyersList";

const BuyersWrapper = () => {
	const [Buyers, setBuyers] = useState([]);
	return (
		<div className="BuyersListWrapper">
			<h2> these are your clients seeking to buy property</h2>
			<AddBuyer buyers={Buyers} setBuyers={setBuyers} />

			<BuyersList Buyers={Buyers} setBuyers={setBuyers} />
		</div>
	);
};

export default BuyersWrapper;
