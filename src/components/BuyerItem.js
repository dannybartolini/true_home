import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const BuyerItem = ({ Buyer, Buyers, setBuyers }) => {
	return (
		<div className="BuyerItem">
			<h2> {Buyer.name}</h2>
			<div>
				<FontAwesomeIcon icon={faPenToSquare} />
				<FontAwesomeIcon icon={faTrash} />
			</div>
		</div>
	);
};

export default BuyerItem;
