import React, { useState } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.data";
import "./login-form.scss";

const LoginForm = () => {
	//Creo lo useState che contiene un oggetto con email e password
	const [credenziali, setCredenziali] = useState({
		email: "",
		password: "",
	});

	//faccio la destrutturazione di credenziali
	const { email, password } = credenziali;

	//creo funzione per pulsante di login che recupera i valori da inviare dallo stato
	const inviaDati = async (event) => {
		event.preventDefault();
		// in login otterremo l'oggetto con tutti i dati dll'utente loggato
		const login = await auth.signInWithEmailAndPassword(email, password);
	};

	const loginGoogle = async () => {
		await signInWithGoogle();
	};

	//creo funzione che utilizza lo state per memorizzare le credenziali che assegnamo all'onChange degli input in modo prende il contenuto dell'evento sull'elemento stesso assegnando con una destrutturazione il valore ed il nome del campo ad ogni modifica del campo
	const handleChange = (event) => {
		const { value, name } = event.target;
		//una volta che ho i nuovi valori recupero l'oggetto intero dello state con lo spread operator in modo che si parta sempre da tutti gli elementi che compongono lo stato e aggiorno. inserisco name tra le parentesi quadre in modo che vanga interpretato in base al target: praticamente [name] sarà "email" se mi trovo sull'input email, e "password" se mi trovo su password
		setCredenziali({ ...credenziali, [name]: value });
	};
	return (
		<div className="login-form">
			<h2>Hai già un account?</h2>
			<span>Utilizza mail e password</span>
			<form onSubmit={inviaDati}>
				<div className="form-group">
					<label className="form-input-label">Indirizzo email</label>
					<input
						type="email"
						name="email"
						value={email}
						required
						onChange={handleChange}
					></input>

					<label className="form-input-label">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						required
						onChange={handleChange}
					></input>
					<div className="buttons">
						<button className="button" type="submit">
							Login
						</button>
						<button
							className="button"
							type="button"
							onClick={loginGoogle}
						>
							Login con Google
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
