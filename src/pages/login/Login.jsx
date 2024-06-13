import React from "react";
import LoginForm from "../../components/login-form/LoginForm";
import RegisterForm from "../../components/register-form/RegisterForm";
import "./login.scss";

const Login = () => {
	return (
		<div className="login d-flex justify-content-between">
			<LoginForm></LoginForm>
			<RegisterForm></RegisterForm>
		</div>
	);
};

export default Login;
