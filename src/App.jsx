import "./App.css";
import Header from "./components/header/Header";

import Articoli from "./pages/articoli/Articoli";
import Homepage from "./pages/homepage/Homepage";
import Cassa from "./pages/cassa/Cassa";
import Login from "./pages/login/Login";

import { Routes, Route, Navigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { auth, saveProductIntoDataBase } from "./firebase/firebase.data";

import { categorie } from "./shop-data";

function App() {
	const [user, setUser] = useState(null);
	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			setUser(userAuth);
		});
		saveProductIntoDataBase(categorie);
	}, []);

	return (
		<div className="App">
			<Header user={user}></Header>
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="/shop/*" element={<Articoli />}></Route>
				<Route path="/checkout" element={<Cassa />}></Route>
				<Route
					path="/login"
					element={user !== null ? <Navigate to="/" /> : <Login />}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
