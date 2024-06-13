import React from "react";
import "./categoria.scss";

import { useNavigate } from "react-router-dom";

const Categoria = ({ image, title, url }) => {
	const navigate = useNavigate();
	return (
		<div className="categoria" onClick={() => navigate(url)}>
			<div
				className="bg-image"
				style={{ backgroundImage: `url(${image})` }}
			></div>
			<div className="content">
				<h1 className="title text-uppercase">{title}</h1>
				<span className="subtitle">Visita ora</span>
			</div>
		</div>
	);
};

export default Categoria;
