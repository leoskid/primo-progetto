import React from "react";
import "./homepage.scss";

import { categorie } from "../../shop-data";
import Categoria from "../../components/categoria/Categoria";

const Homepage = () => {
	return (
		<div className="homepage">
			{categorie.map((cat) => (
				<Categoria
					key={cat.id}
					image={cat.image}
					title={cat.title}
					url={cat.url}
				/>
			))}
		</div>
	);
};

export default Homepage;
