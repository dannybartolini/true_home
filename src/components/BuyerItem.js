import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BuyerProperties from "./BuyerProperties";

const BuyerItem = ({ Buyer, Buyers, setBuyers }) => {
	const navigate = useNavigate();

	const deleteBuyer = (id) =>
		setBuyers(Buyers.filter((Buyer) => Buyer.id !== id));

	const showListings = () => {
		navigate("/BuyerProperties");
	};

	return (
		<div className="BuyerItem">
			<h2> {Buyer.name}</h2>
			<div>
				<FontAwesomeIcon
					className="edit-icon"
					icon={faPenToSquare}
					onClick={() => showListings()}
				/>
				<FontAwesomeIcon
					className="delete-icon"
					icon={faTrash}
					onClick={() => deleteBuyer(Buyer.id)}
				/>
			</div>
		</div>
	);
};

export default BuyerItem;
