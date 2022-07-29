import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../services/UserService";
import "../styles/Login.css";

export default function Login() {
  const navigate = useNavigate();
  const navigateRegister = () => {
    navigate("/Register");
  };

  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
 
  const handleSubmit = (event) => {
    event.preventDefault();
    getUser().then();

  };

  return (
    <div>
      <h2 className="title"> Por favor inicie sesión</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="wrapper-form">
          <label htmlFor="email">
            <input
              type="email"
              placeholder="Escriba su email"
              required
              onChange={(event) => setEmailInput(event.target.value)}
              value={emailInput}
            />
          </label>
          <br />
          <label htmlFor="password">
            <input
              type="password"
              placeholder="Escriba su contraseña"
              required
              onChange={(event) => setPassInput(event.target.value)}
              value={passInput}
            />
          </label>
        </fieldset>
        <button type="submit">Ingresar</button>
        <button type="button" onClick={navigateRegister}>
          Registrarse
        </button>
      </form>
    </div>
  );
}
