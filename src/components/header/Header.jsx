import React from "react";
import "./header.scss";
import ShoppingIcon from "../../assets/img/shopping-bag.png";
import Logo from "../../assets/img/react.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.data";
const Header = ({ user }) => {
	const logout = () => {
		auth.signOut();
	};
	return (
		<div className="header">
			<div className="container-fluid">
				<div className="row ">
					<div className="col-4 d-flex justify-content-start">
						<Link className="logo-container" to="/">
							<img className="logo" src={Logo}></img>
						</Link>
					</div>
					<div className="col-8 d-flex justify-content-end">
						<div className="options">
							<Link className="option" to="/shop">
								Articoli
							</Link>
							{user !== null ? (
								<div className="option" onClick={logout}>
									Logout
								</div>
							) : (
								<Link className="option" to="/login">
									Login
								</Link>
							)}

							<div className="il-carrello">
								<Link className="options" to="/checkout">
									<img
										src={ShoppingIcon}
										className="icona-carrello"
										alt="carrello"
									></img>
									<span className="item-count">0</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
