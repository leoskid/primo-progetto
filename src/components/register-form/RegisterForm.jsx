import React, { useState } from "react";
import { auth, getUserProfile } from "../../firebase/firebase.data";
import "./register-form.scss";

const RegisterForm = () => {
	//Creo lo useState che contiene un oggetto con email e password
	const [credenziali, setCredenziali] = useState({
		nome: "",
		cognome: "",
		email: "",
		password: "",
	});

	//faccio la destrutturazione di credenziali
	const { nome, cognome, email, password } = credenziali;
	//creo funzione per pulsante di login che recupera i valori da inviare dallo stato
	const inviaDati = async (event) => {
		event.preventDefault();
		const register = await auth.createUserWithEmailAndPassword(
			email,
			password
		);
		getUserProfile(register.user, { nome, cognome });
	};

	//creo funzione che utilizza lo state per memorizzare le credenziali che assegnamo all'onChange degli input in modo prende il contenuto dell'evento sull'elemento stesso assegnando con una destrutturazione il valore ed il nome del campo ad ogni modifica del campo
	const handleChange = (event) => {
		const { value, name } = event.target;
		//una volta che ho i nuovi valori recupero l'oggetto intero dello state con lo spread operator in modo che si parta sempre da tutti gli elementi che compongono lo stato e aggiorno. inserisco name tra le parentesi quadre in modo che vanga interpretato in base al target: praticamente [name] sarà "email" se mi trovo sull'input email, e "password" se mi trovo su password
		setCredenziali({ ...credenziali, [name]: value });
	};
	return (
		<div className="register-form">
			<h2>Non sono resgistrato</h2>
			<span>Compila i campi sottostanti</span>
			<form onSubmit={inviaDati}>
				<div className="form-group">
					<label className="form-input-label">Nome</label>
					<input
						type="text"
						name="nome"
						value={nome}
						required
						onChange={handleChange}
					></input>
					<label className="form-input-label">Cognome</label>
					<input
						type="text"
						name="cognome"
						value={cognome}
						required
						onChange={handleChange}
					></input>
					<label className="form-input-label">Indirizzo Email</label>
					<input
						type="email"
						name="email"
						value={email}
						required
						onChange={handleChange}
					></input>
					<label className="form-input-label">Password</label>
					<input
						type="text"
						name="password"
						value={password}
						required
						onChange={handleChange}
					></input>
					<button className="button" type="submit">
						Registrati
					</button>
				</div>
			</form>
		</div>
	);
};

export default RegisterForm;
