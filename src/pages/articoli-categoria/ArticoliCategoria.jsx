import React from "react";
import "./articoli-categoria.scss";

import { useParams } from "react-router-dom";

const ArticoliCategoria = () => {
	const { category } = useParams();
	return (
		<div className="articoli-categoria">
			ARTICOLI DELLA CATEGORIA {category}{" "}
		</div>
	);
};

export default ArticoliCategoria;
