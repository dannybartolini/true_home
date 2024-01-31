import Item from "./Item";

const ItemList = () => {
	return (
		<form className="buyersList">
			<input
				type="text"
				className="buyerInput"
				placeholder="What is your client's name?"
			/>
			<button type="submit" className="list-button">
				Add client
			</button>
		</form>
	);
};

export default ItemList;
