import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function MenuContent() {
  return (
    <div className="menu-content-container">
      <div className="content-wrapper">
        <Link to="/quality">
          <div className="content-style">Raison d’être</div>
        </Link>
        <Link to="/partner">
          <div className="content-style">Devenir Organisateur</div>
        </Link>
        <Link to="/news">
          <div className="content-style">Actualités</div>
        </Link>
        <Link to="/rejoin">
          <div className="content-style">Nous rejoindre</div>
        </Link>
        <Link to="/">
          <div className="content-style">Contact</div>
        </Link>
      </div>
    </div>
  );
}

export default MenuContent;
