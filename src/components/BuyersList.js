import React from "react";
import BuyerItem from "./BuyerItem";

const BuyersList = ({ Buyers, setBuyers }) => {
	return (
		<div className="title">
			{Buyers.map((Buyer) => (
				<BuyerItem
					Buyer={Buyer}
					setBuyers={setBuyers}
					Buyers={Buyers}
					key={Buyer.id}
				/>
			))}
		</div>
	);
};

export default BuyersList;
