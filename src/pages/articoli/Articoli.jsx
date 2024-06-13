import React from "react";
import "./articoli.scss";

import { Routes, Route } from "react-router-dom";
import AnteprimaArticoli from "../../components/anteprima-articoli/AnteprimaArticoli";
import ArticoliCategoria from "../../pages/articoli-categoria/ArticoliCategoria";

const Articoli = () => {
	return (
		<div className="articoli">
			<Routes>
				<Route path="" element={<AnteprimaArticoli />}></Route>
				<Route path=":category" element={<ArticoliCategoria />}></Route>
			</Routes>
		</div>
	);
};

export default Articoli;
