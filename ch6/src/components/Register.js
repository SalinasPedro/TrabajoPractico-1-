import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from "../services/UserService";
import "../styles/Register.css";

export default function Register({ userName, userEmail, userPass, saveUser }) {
  const navigate = useNavigate();
  const navigateRegister = () => {
    navigate("/AllPost");
  };

  const [alert, setAlert] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");

  let mounted = useRef(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    const { target } = event;
    const { name, email, password } = target;

    setUser(name, email, password).then((data) => {
      if (mounted.current) {
        setNameInput("");
        setEmailInput("");
        setPassInput("");
        setAlert(true);
        navigateRegister();
      }
      
      console.log(name, email, password);
    });
    
  };

  return (
    <div>
      <h2 className="title">Por favor regístrese aquí.</h2>
      {alert && <h2>Envío exitoso.</h2>}
      <form onSubmit={handleSubmit}>
        <fieldset className="wrapper-form">
          <label htmlFor="name">
            <input
              type="text"
              placeholder="Escribir nombre"
              required
              onChange={(event) => setNameInput(event.target.value)}
              value={nameInput}
            />
          </label>{" "}
          <br />
          <label htmlFor="email">
            <input
              type="email"
              placeholder="Escribir email"
              required
              onChange={(event) => setEmailInput(event.target.value)}
              value={emailInput}
            />
          </label>{" "}
          <br />
          <label htmlFor="password">
            <input
              type="password"
              placeholder="Escribir contraseña"
              required
              onChange={(event) => setPassInput(event.target.value)}
              value={passInput}
            />
          </label>
        </fieldset>
        <button type="submit">Crear Cuenta</button>
      </form>
    </div>
  );
}
