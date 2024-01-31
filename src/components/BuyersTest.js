import AddItem from "./AddItem";
import ItemList from "./ItemList";
const BuyersList = () => {
	return (
		<div className="BuyersListWrapper">
			<h2> these are your clients seeking to buy property</h2>
			<ItemList />
		</div>
	);
};

export default BuyersList;
