import React from "react";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="wrapper-home">
      <div className="home-title">
        <h1>Bienvenidos a mi Blog</h1>
      </div>
      <div className="home-body">
        <img
          className="home-img"
          src="https://login.gov/assets/img/login-gov-600x314.png"
          alt="bienvenido"
          width="800px"
        />
      </div>
    </div>
  );
}
